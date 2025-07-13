import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">David Robert</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Data Analyst & Software Developer</p>
        </div>
        
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a 
            href="https://www.linkedin.com/in/david-robert-ny/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a 
            href="https://github.com/devdavidrobert" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://twitter.com/devdavidrobert" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="text-xl" />
          </a>
        </div>
        
        <div className="text-gray-500 dark:text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} David Robert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
