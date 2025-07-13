# Manual cPanel Deployment Guide for Next.js Portfolio

Since we're experiencing some build issues, this guide provides a manual approach to deploy your Next.js portfolio to cPanel.

## Step 1: Prepare your Next.js project for static export

1. Ensure your `next.config.js` has the following settings:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     // Output static files for cPanel hosting
     output: 'export',
     
     // Disable image optimization for static export
     images: {
       unoptimized: true,
     },
     
     // Enable trailing slash for better compatibility with cPanel
     trailingSlash: true,
     
     // Disable server-side features that won't work on cPanel
     experimental: {},
     
     // Disable source maps in production for smaller bundle size
     productionBrowserSourceMaps: false,
   };
   
   module.exports = nextConfig;
   ```

2. Make sure your EmailJS configuration is set up correctly in `lib/emailjs.ts`:
   ```typescript
   // Your EmailJS credentials are already configured:
   const serviceId = 'service_yl7zwan';
   const templateId = 'template_i8oigib';
   const publicKey = 'TKjOqaCMHopWb7jD_';
   ```

## Step 2: Create necessary type declarations

Create a type declaration file for `react-vertical-timeline-component` at `types/react-vertical-timeline-component.d.ts`:

```typescript
declare module 'react-vertical-timeline-component' {
  import { ReactNode } from 'react';

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '2-columns';
    lineColor?: string;
    children?: ReactNode;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    intersectionObserverProps?: any;
    visible?: boolean;
    children?: ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}

declare module 'react-vertical-timeline-component/style.min.css';
```

## Step 3: Manual build process

Run the following commands in your terminal:

```bash
# Clean any previous build artifacts
rm -rf .next out

# Install dependencies (if needed)
npm install

# Build the project
npm run build
```

If the build fails with TypeScript errors, you can try:

```bash
# Build with TypeScript checking disabled
npx next build --no-lint
```

## Step 4: Create .htaccess file

Create a `.htaccess` file in your project root with the following content:

```apache
# Enable rewrite engine
RewriteEngine On
RewriteBase /

# Redirect HTTP to HTTPS
RewriteCond %{HTTPS} off
RewriteCond %{HTTP_HOST} !^localhost
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Set default character set
AddDefaultCharset UTF-8

# Enable compression for better performance
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>

# Set caching headers for static assets
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"
ExpiresByType image/webp "access plus 1 year"
ExpiresByType text/css "access plus 1 month"
ExpiresByType application/pdf "access plus 1 month"
ExpiresByType text/javascript "access plus 1 month"
ExpiresByType application/javascript "access plus 1 month"
ExpiresByType application/x-javascript "access plus 1 month"
ExpiresByType application/x-font-woff "access plus 1 year"
ExpiresByType application/x-font-woff2 "access plus 1 year"
ExpiresByType font/woff "access plus 1 year"
ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Serve static files directly
RewriteCond %{REQUEST_URI} \.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot|json)$ [NC]
RewriteRule ^ - [L]

# Handle Next.js routes
RewriteRule ^_next/(.*) _next/$1 [L]

# For all other routes, serve the index.html
RewriteRule ^([^.]+)$ index.html [L]
RewriteRule ^$ index.html [L]
```

## Step 5: Post-build tasks

After the build completes, copy the `.htaccess` file to the `out` directory:

```bash
# Copy .htaccess to the out directory
copy .htaccess out\
```

Create a `robots.txt` file in the `out` directory:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## Step 6: Upload to cPanel

1. **Compress the `out` directory**:
   - Right-click on the `out` folder
   - Select "Send to" > "Compressed (zipped) folder"
   - This will create `out.zip`

2. **Upload to cPanel**:
   - Log in to your cPanel account
   - Navigate to File Manager
   - Go to your website's root directory (usually `public_html`)
   - Upload the `out.zip` file
   - Extract the zip file in the current directory
   - If needed, move the extracted files to the desired location

3. **Set file permissions**:
   - Select all files and set permissions to 644
   - Select all directories and set permissions to 755

## Step 7: Verify deployment

1. Visit your website to ensure it loads correctly
2. Test navigation to make sure all routes work
3. Test the contact form to ensure emails are sent correctly
4. Check that all images and assets are loading properly

## Troubleshooting

### If routes don't work:
- Verify the `.htaccess` file was uploaded correctly
- Check that your cPanel server has mod_rewrite enabled

### If the contact form doesn't work:
- Check the browser console for any errors
- Verify your EmailJS configuration

### If images don't load:
- Check image paths in your code
- Verify image files were uploaded correctly

## Alternative Deployment Method

If you continue to experience issues with the static export, consider using a different hosting provider that better supports Next.js, such as:

- Vercel (built for Next.js)
- Netlify
- GitHub Pages
- AWS Amplify

These platforms offer simpler deployment processes specifically optimized for Next.js applications.
