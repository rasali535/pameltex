DEPLOYMENT INSTRUCTIONS FOR HOSTINGER (SPA VERSION)

Your website has been rewritten as a "Single Page Application" (JavaScript).
This means navigation happens instantly without page reloads.

DEPLOYMENT STEPS:
1. Upload the following files to "public_html":
   - index.html
   - app.js
   - styles.css
   - send_mail.php
   - .htaccess  <-- IMPORTANT: This file handles the routing (e.g., /contact -> index.html)

2. Do NOT upload the "_legacy" folder to public_html (keep it as a backup).

TROUBLESHOOTING:
- If clicking links gives a "404 Not Found" error from the server (not the styled 404 page), it means the ".htaccess" file is missing or not working. Ensure it is uploaded.
- If the contact form fails, ensure "send_mail.php" is in the same folder as "index.html".
