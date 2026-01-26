<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $company = map_field($_POST["company"]);
    $service = map_field($_POST["service"]);
    $details = map_field($_POST["details"]);
    $message = map_field($_POST["message"]);
    $type = map_field($_POST["type"]);

    // Determine if it's a Quote or General Contact based on fields present
    if (!empty($service)) {
        $subject = "New Consultancy Quote Request: $service";
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Company: $company\n";
        $email_content .= "Service Needed: $service\n\n";
        $email_content .= "Project Details:\n$details\n";
    } else {
        $subject = "New Contact Inquiry: $type";
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Type: $type\n\n";
        $email_content .= "Message:\n$message\n";
    }

    $to = "info@pameltex.com";
    $headers = "From: Website <noreply@pameltex.com>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

function map_field($data) {
    return isset($data) ? strip_tags(trim($data)) : "";
}
?>