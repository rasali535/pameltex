DEPLOYMENT INSTRUCTIONS FOR HOSTINGER

Your website is now fully configured for deployment. Follow these valid steps to ensure a smooth launch.

OPTION 1: USING FILE MANAGER (Recommended/Easiest)
1. Log in to your Hostinger hPanel.
2. Go to "Files" > "File Manager".
3. Double-click the "public_html" folder to open it.
4. Delete the "default.php" file if it exists.
5. Upload the following files from your local "pameltex" folder directly into "public_html":
   - index.html (and/or index.php)
   - styles.css
   - script.js
   - contact.html
   - corporate-services.html
   - individual-therapy.html
   - our-company.html
   - faq.html
   - 404.html
   - send_mail.php
   - .htaccess
   - robots.txt
   - sitemap.xml

OPTION 2: USING GIT DEPLOYMENT
If you are using the "Git Deployment" feature in Hostinger and received an "Unsupported framework" error:
1. Ensure the "package.json" and "composer.json" files created in your folder are committed to your repository.
2. These files tell the scanner that this is a valid project, even if it is static.
3. In the deployment settings, if asked for a "Build Command", leave it empty or use: echo 'No build needed'
4. If asked for a "Publish Directory", use: /

TROUBLESHOOTING
- "403 Forbidden": Ensure you have an "index.html" or "index.php" file in the root of public_html.
- "Form not sending": Ensure "send_mail.php" is uploaded. Check your "Spam" folder. Hostinger's mail function works out-of-the-box but sometimes requires setting up an email account providing valid SMTP credentials if using a library (this script uses the default mail() function which is simplest).
- "Styles not loading": Force refresh your browser (Ctrl+F5) to clear cache.
