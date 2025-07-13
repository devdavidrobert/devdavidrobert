# cPanel Deployment Guide for Next.js Portfolio

This guide will help you deploy your Next.js portfolio website to a cPanel hosting environment.

## Prerequisites

- A cPanel hosting account
- FTP access or cPanel File Manager access
- Node.js and npm installed on your local machine

## Pre-Deployment Setup

We've already made the following changes to prepare your project for cPanel deployment:

1. Updated `next.config.js` to:
   - Set `output: 'export'` for static site generation
   - Disable image optimization with `unoptimized: true`
   - Set `trailingSlash: true` for better compatibility

2. Created a `.htaccess` file for proper routing

3. Modified the contact form to use client-side email handling with EmailJS

4. Added deployment scripts to `package.json`

## EmailJS Setup (Required Before Deployment)

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service and connect it to your email provider
3. Create a new email template with the following template variables:
   - `from_name` - Sender's name
   - `reply_to` - Sender's email
   - `message` - Message content
4. Update the following values in `lib/emailjs.ts`:
   - `serviceId` - Your EmailJS service ID
   - `templateId` - Your EmailJS template ID
   - `publicKey` - Your EmailJS public key

## Building for Deployment

Run the following command to build and prepare your project for cPanel:

```bash
npm run deploy
```

This will:
1. Build your Next.js project as a static site
2. Copy the `.htaccess` file to the output directory
3. Create a `robots.txt` file
4. Create a `phpinfo.php` file for server testing

## Uploading to cPanel

### Method 1: Using FTP

1. Use an FTP client (like FileZilla) to connect to your server
2. Navigate to your website's root directory (usually `public_html`)
3. Upload all contents from the `out` directory to your chosen directory

### Method 2: Using cPanel File Manager

1. Log in to your cPanel account
2. Open File Manager and navigate to your website's root directory
3. Create a ZIP file of your `out` directory contents
4. Upload the ZIP file to your server
5. Extract the ZIP file to your chosen directory

## Post-Deployment Checks

1. Visit your website to ensure it loads correctly
2. Test the navigation to make sure all routes work
3. Test the contact form to ensure emails are sent correctly
4. Check that all images and assets are loading properly

## Troubleshooting

### If routes don't work:
- Ensure the `.htaccess` file was properly uploaded
- Check that your cPanel server has mod_rewrite enabled

### If the contact form doesn't work:
- Verify your EmailJS configuration in the browser console
- Check that you've entered the correct EmailJS credentials

### If images don't load:
- Verify that image paths are correct
- Check that image files were properly uploaded

## Additional Notes

- The static export doesn't support server-side rendering or API routes
- All dynamic functionality must be client-side
- For future updates, simply run `npm run deploy` again and re-upload the contents

## Need Help?

If you encounter any issues during deployment, check the [Next.js documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) for more information on static exports.
