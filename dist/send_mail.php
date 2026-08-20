<?php
/**
 * PAMELTEX — Hardened Contact Form Mail Endpoint
 * Hostinger / Apache / PHP 8.3
 *
 * Security controls implemented:
 *  - POST-only: returns 405 for all other methods
 *  - Restricted CORS: same-origin by default; www.pameltex.com accepted
 *  - Server-side required-field validation
 *  - Email address validation (filter_var + format check)
 *  - Maximum field length limits
 *  - Header-injection protection: newlines stripped from all header values
 *  - Honeypot spam protection (hp field must be absent/empty)
 *  - Rate limiting: session-based (1 submission per 60 seconds per session)
 *  - Safe error responses: no stack traces, no source paths
 *  - Correct HTTP status codes
 *  - No sensitive logging
 *  - No secrets in source
 *
 * EMAIL RECIPIENT
 *   Production recipient: info@pameltex.com
 */


// ── CONFIGURATION ──────────────────────────────────────────────────────────

/**
 * MAIL_TO — receiving mailbox.
 * PENDING PAMELTEX CONFIRMATION.
 * Change this constant once the final destination is approved.
 */
define('MAIL_TO',       'info@pameltex.com');
define('MAIL_FROM',     'noreply@pameltex.com');
define('MAIL_FROM_NAME','Pameltex Website');
define('SITE_DOMAIN',   'www.pameltex.com');
define('RATE_LIMIT_SEC', 60);     // minimum seconds between submissions per session
define('MAX_SUBMISSIONS', 5);     // max submissions per session lifetime

// ── CORS ───────────────────────────────────────────────────────────────────

$allowed_origins = [
    'https://www.pameltex.com',
    'https://pameltex.com',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Vary: Origin");
} else {
    // Same-origin requests have no Origin header — allow them.
    // Block all others silently.
    if ($origin !== '') {
        http_response_code(403);
        exit;
    }
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Pre-flight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ── METHOD GUARD ───────────────────────────────────────────────────────────

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header("Allow: POST");
    exit;
}

// ── CONTENT-TYPE GUARD ────────────────────────────────────────────────────

$content_type = $_SERVER['CONTENT_TYPE'] ?? '';
// Accept multipart/form-data (FormData) and application/x-www-form-urlencoded
if (
    stripos($content_type, 'multipart/form-data') === false &&
    stripos($content_type, 'application/x-www-form-urlencoded') === false
) {
    json_error(415, 'Unsupported content type.');
}

// ── SESSION RATE LIMITING ─────────────────────────────────────────────────

session_start();

$now = time();

if (!isset($_SESSION['mail_last_sent'])) {
    $_SESSION['mail_last_sent']  = 0;
    $_SESSION['mail_send_count'] = 0;
}

if (($now - $_SESSION['mail_last_sent']) < RATE_LIMIT_SEC) {
    http_response_code(429);
    header("Retry-After: " . RATE_LIMIT_SEC);
    json_response(429, 'Too many requests. Please wait before submitting again.');
}

if ($_SESSION['mail_send_count'] >= MAX_SUBMISSIONS) {
    http_response_code(429);
    json_response(429, 'Submission limit reached for this session.');
}

// ── HONEYPOT ──────────────────────────────────────────────────────────────

$honeypot = $_POST['hp'] ?? '';
if ($honeypot !== '') {
    // Bot filled the hidden field. Pretend success silently.
    http_response_code(200);
    json_response(200, 'Thank you. We will be in touch.');
}

// ── HELPERS ────────────────────────────────────────────────────────────────

/**
 * Clean a plain-text field: strip tags, trim whitespace, enforce max length.
 */
function clean_field(string $value, int $max_len = 500): string
{
    return mb_substr(strip_tags(trim($value)), 0, $max_len);
}

/**
 * Strip all newline and carriage-return characters to prevent header injection.
 */
function strip_newlines(string $value): string
{
    return str_replace(["\r", "\n", "%0a", "%0d", "%0A", "%0D"], '', $value);
}

function json_response(int $code, string $message): void
{
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode(['status' => $code, 'message' => $message]);
    exit;
}

function json_error(int $code, string $message): void
{
    json_response($code, $message);
}

// ── FIELD EXTRACTION & VALIDATION ─────────────────────────────────────────

$errors = [];

// --- Common fields (both form types) ---
$submission_type = clean_field($_POST['type'] ?? '', 100);
$name            = clean_field($_POST['name'] ?? '', 120);
$org             = clean_field($_POST['org']  ?? '', 200);
$email_raw       = trim($_POST['email'] ?? '');
$phone           = clean_field($_POST['phone'] ?? '', 30);
$location        = clean_field($_POST['location'] ?? '', 120);
$challenge       = clean_field($_POST['challenge'] ?? '', 1500);

// Required fields — common
if ($name === '') $errors[] = 'Name is required.';
if ($org === '')  $errors[] = 'Organisation is required.';

// Email validation
$email = filter_var($email_raw, FILTER_VALIDATE_EMAIL);
if ($email === false || $email === '') {
    $errors[] = 'A valid email address is required.';
} else {
    $email = mb_substr($email, 0, 200);
}

// --- Consultation-specific fields ---
$service      = clean_field($_POST['service']   ?? '', 100);
$sector       = clean_field($_POST['sector']    ?? '', 80);
$workforce    = clean_field($_POST['workforce'] ?? '', 30);
$timeline     = clean_field($_POST['timeline']  ?? '', 80);

// --- HSE assessment-specific fields ---
$facility_type   = clean_field($_POST['facilityType']    ?? '', 100);
$staff_size      = clean_field($_POST['staffSize']       ?? '', 20);
$hazards         = clean_field($_POST['hazards']         ?? '', 500);
$affected_areas  = clean_field($_POST['affectedAreas']   ?? '', 400);
$audit_deadline  = clean_field($_POST['auditDeadline']   ?? '', 100);
$preferred_date  = clean_field($_POST['preferredDate']   ?? '', 100);
$additional_scope = clean_field($_POST['additionalScope'] ?? '', 1500);

// Type-specific required fields
$is_hse = (stripos($submission_type, 'HSE') !== false || $facility_type !== '');

if ($is_hse) {
    if ($facility_type === '') $errors[] = 'Facility type is required.';
    if ($hazards === '')       $errors[] = 'At least one hazard concern is required.';
} else {
    if ($challenge === '') $errors[] = 'Please describe your challenge or need.';
}

if (!empty($errors)) {
    json_error(400, implode(' ', $errors));
}

// ── BUILD EMAIL ────────────────────────────────────────────────────────────

$safe_name   = strip_newlines($name);
$safe_email  = strip_newlines((string)$email);
$safe_org    = strip_newlines($org);

if ($is_hse) {
    $subject = "Pameltex HSE Assessment Enquiry — {$safe_org}";
    $body  = "PAMELTEX — HSE Workplace Assessment Enquiry\n";
    $body .= str_repeat('=', 55) . "\n\n";
    $body .= "Name:             $safe_name\n";
    $body .= "Organisation:     $safe_org\n";
    $body .= "Email:            $safe_email\n";
    $body .= "Phone:            $phone\n";
    $body .= "Facility Type:    $facility_type\n";
    $body .= "Location:         $location\n";
    $body .= "Staff at Facility: $staff_size\n";
    $body .= "Hazard Concerns:  $hazards\n";
    $body .= "Affected Areas:   $affected_areas\n";
    $body .= "Audit Deadline:   $audit_deadline\n";
    $body .= "Preferred Date:   $preferred_date\n\n";
    $body .= "Additional Scope Information:\n$additional_scope\n";
} else {
    $subject = "Pameltex Consultation Enquiry — {$safe_org}";
    $body  = "PAMELTEX — Corporate Consultation Enquiry\n";
    $body .= str_repeat('=', 55) . "\n\n";
    $body .= "Enquiry Type:     $submission_type\n";
    $body .= "Name:             $safe_name\n";
    $body .= "Organisation:     $safe_org\n";
    $body .= "Role:             " . clean_field($_POST['role'] ?? '', 120) . "\n";
    $body .= "Email:            $safe_email\n";
    $body .= "Phone:            $phone\n";
    $body .= "Location:         $location\n";
    $body .= "Service Area:     $service\n";
    $body .= "Sector:           $sector\n";
    $body .= "Workforce Size:   $workforce\n";
    $body .= "Timeline:         $timeline\n\n";
    $body .= "Challenge / Need:\n$challenge\n";
}

$body .= "\n" . str_repeat('-', 55) . "\n";
$body .= "Submitted: " . date('Y-m-d H:i:s T') . "\n";
$body .= "Endpoint:  send_mail.php v2 (hardened)\n";

// ── HEADERS ────────────────────────────────────────────────────────────────

// All header values are stripped of newlines before use.
$headers  = "From: " . strip_newlines(MAIL_FROM_NAME) . " <" . strip_newlines(MAIL_FROM) . ">\r\n";
$headers .= "Reply-To: $safe_email\r\n";
$headers .= "X-Mailer: Pameltex-Contact/2.0\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

// ── SEND ───────────────────────────────────────────────────────────────────

$safe_subject = strip_newlines($subject);
$sent = mail(MAIL_TO, $safe_subject, $body, $headers);

if ($sent) {
    // Update rate limiting
    $_SESSION['mail_last_sent']   = $now;
    $_SESSION['mail_send_count'] += 1;

    json_response(200, 'Thank you. Your enquiry has been received. We will respond within 2 business days.');
} else {
    // Do not expose mail() failure details
    json_response(500, 'We were unable to process your enquiry at this time. Please email us directly at ' . MAIL_TO);
}