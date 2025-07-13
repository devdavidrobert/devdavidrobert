// deploy-to-cpanel.js
const fs = require('fs');
const path = require('path');

// Function to copy .htaccess to the out directory after build
function copyHtaccessToOut() {
  console.log('Copying .htaccess to out directory...');
  try {
    const htaccessSource = path.join(__dirname, '.htaccess');
    const htaccessDest = path.join(__dirname, 'out', '.htaccess');
    
    if (fs.existsSync(htaccessSource)) {
      fs.copyFileSync(htaccessSource, htaccessDest);
      console.log('✅ .htaccess copied successfully');
    } else {
      console.error('❌ .htaccess file not found in root directory');
    }
  } catch (error) {
    console.error('❌ Error copying .htaccess:', error);
  }
}

// Function to create a robots.txt file if it doesn't exist
function createRobotsTxt() {
  console.log('Creating robots.txt...');
  try {
    const robotsTxtPath = path.join(__dirname, 'out', 'robots.txt');
    const robotsTxtContent = `User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml`;
    
    fs.writeFileSync(robotsTxtPath, robotsTxtContent);
    console.log('✅ robots.txt created successfully');
  } catch (error) {
    console.error('❌ Error creating robots.txt:', error);
  }
}

// Function to create a simple PHP info file for testing
function createPhpInfo() {
  console.log('Creating phpinfo.php for server testing...');
  try {
    const phpInfoPath = path.join(__dirname, 'out', 'phpinfo.php');
    const phpInfoContent = `<?php
// Show PHP info for debugging purposes
phpinfo();
?>`;
    
    fs.writeFileSync(phpInfoPath, phpInfoContent);
    console.log('✅ phpinfo.php created successfully');
  } catch (error) {
    console.error('❌ Error creating phpinfo.php:', error);
  }
}

// Main function to run all post-build tasks
function runPostBuildTasks() {
  console.log('Running post-build tasks for cPanel deployment...');
  
  // Check if out directory exists
  const outDir = path.join(__dirname, 'out');
  if (!fs.existsSync(outDir)) {
    console.error('❌ The "out" directory does not exist. Run "npm run build" first.');
    return;
  }
  
  // Run all tasks
  copyHtaccessToOut();
  createRobotsTxt();
  createPhpInfo();
  
  console.log('\n✅ All post-build tasks completed successfully!');
  console.log('\nTo deploy to cPanel:');
  console.log('1. Zip the contents of the "out" directory');
  console.log('2. Upload the zip file to your cPanel account');
  console.log('3. Extract the zip file to your public_html directory or subdirectory');
  console.log('4. Ensure all file permissions are set correctly (typically 644 for files, 755 for directories)');
}

// Run the script
runPostBuildTasks();
