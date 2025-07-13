// deploy-script.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

console.log(`${colors.blue}=== Portfolio cPanel Deployment Script ===${colors.reset}\n`);

// Step 1: Check if .htaccess exists
console.log(`${colors.yellow}Step 1: Checking for .htaccess file...${colors.reset}`);
const htaccessPath = path.join(__dirname, '.htaccess');
if (!fs.existsSync(htaccessPath)) {
  console.log(`${colors.red}❌ .htaccess file not found! Creating it...${colors.reset}`);
  
  const htaccessContent = `# Enable rewrite engine
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
RewriteCond %{REQUEST_URI} \\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot|json)$ [NC]
RewriteRule ^ - [L]

# Handle Next.js routes
RewriteRule ^_next/(.*) _next/$1 [L]

# For all other routes, serve the index.html
RewriteRule ^([^.]+)$ index.html [L]
RewriteRule ^$ index.html [L]`;
  
  fs.writeFileSync(htaccessPath, htaccessContent);
  console.log(`${colors.green}✅ .htaccess file created${colors.reset}`);
} else {
  console.log(`${colors.green}✅ .htaccess file found${colors.reset}`);
}

// Step 2: Create type declaration for react-vertical-timeline-component
console.log(`\n${colors.yellow}Step 2: Creating type declaration for react-vertical-timeline-component...${colors.reset}`);
const typesDir = path.join(__dirname, 'types');
if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir);
  console.log(`${colors.green}✅ Created types directory${colors.reset}`);
}

const declarationPath = path.join(typesDir, 'react-vertical-timeline-component.d.ts');
const declarationContent = `declare module 'react-vertical-timeline-component' {
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

declare module 'react-vertical-timeline-component/style.min.css';`;

fs.writeFileSync(declarationPath, declarationContent);
console.log(`${colors.green}✅ Created type declaration file${colors.reset}`);

// Step 3: Build the project
console.log(`\n${colors.yellow}Step 3: Building the project...${colors.reset}`);
try {
  // Run the build command
  console.log(`${colors.blue}Running: next build${colors.reset}`);
  execSync('npx next build', { stdio: 'inherit' });
  console.log(`${colors.green}✅ Build completed successfully${colors.reset}`);
  
  // Check if the out directory exists
  const outDir = path.join(__dirname, 'out');
  if (fs.existsSync(outDir)) {
    console.log(`${colors.green}✅ Static export generated in 'out' directory${colors.reset}`);
  } else {
    console.log(`${colors.red}❌ 'out' directory not found. Static export may have failed.${colors.reset}`);
  }
} catch (error) {
  console.error(`${colors.red}❌ Build failed with error:${colors.reset}`, error.message);
  process.exit(1);
}

// Step 4: Copy .htaccess to out directory
console.log(`\n${colors.yellow}Step 4: Copying .htaccess to out directory...${colors.reset}`);
const outDir = path.join(__dirname, 'out');
if (fs.existsSync(outDir)) {
  const htaccessDest = path.join(outDir, '.htaccess');
  fs.copyFileSync(htaccessPath, htaccessDest);
  console.log(`${colors.green}✅ .htaccess copied to out directory${colors.reset}`);
} else {
  console.log(`${colors.red}❌ 'out' directory not found. Cannot copy .htaccess.${colors.reset}`);
}

// Step 5: Create robots.txt
console.log(`\n${colors.yellow}Step 5: Creating robots.txt...${colors.reset}`);
if (fs.existsSync(outDir)) {
  const robotsTxtPath = path.join(outDir, 'robots.txt');
  const robotsTxtContent = `User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml`;
  
  fs.writeFileSync(robotsTxtPath, robotsTxtContent);
  console.log(`${colors.green}✅ robots.txt created${colors.reset}`);
} else {
  console.log(`${colors.red}❌ 'out' directory not found. Cannot create robots.txt.${colors.reset}`);
}

console.log(`\n${colors.blue}=== Deployment preparation complete ===${colors.reset}`);
console.log(`\n${colors.yellow}Next steps:${colors.reset}`);
console.log(`1. Upload the contents of the 'out' directory to your cPanel hosting`);
console.log(`2. Ensure all files have the correct permissions (644 for files, 755 for directories)`);
console.log(`3. Test your website to ensure all routes and functionality work correctly`);
