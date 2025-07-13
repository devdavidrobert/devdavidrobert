"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { sendEmail } from "@/lib/emailjs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-[53rem] mx-auto px-4 sm:px-6 md:px-8"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get In Touch</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
        <div className="space-y-5 sm:space-y-6">
          <p className="text-gray-700 dark:text-white/80 text-sm sm:text-base md:text-lg font-serif">
            I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the channels below or use the contact form.
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-100 p-2 sm:p-3 rounded-full dark:bg-primary-900/30">
                <HiMail className="text-primary-600 dark:text-primary-400 text-lg sm:text-xl" />
              </div>
              <a 
                href="mailto:info@devdavidrobert.com" 
                className="text-gray-700 dark:text-white/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm sm:text-base"
              >
                info@devdavidrobert.com
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-primary-100 p-2 sm:p-3 rounded-full dark:bg-primary-900/30">
                <HiPhone className="text-primary-600 dark:text-primary-400 text-lg sm:text-xl" />
              </div>
              <a 
                href="tel:+254795599339" 
                className="text-gray-700 dark:text-white/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm sm:text-base"
              >
                +254 795 599 339
              </a>
            </div>
          </div>
          
          <div className="pt-3 sm:pt-4">
            <h3 className="text-gray-800 dark:text-white/90 font-medium mb-3 font-display text-base sm:text-lg">Connect with me</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://www.linkedin.com/in/david-robert-ny/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-100 p-2 sm:p-3 rounded-full dark:bg-primary-900/30 hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-primary-600 dark:text-primary-400 text-lg sm:text-xl" />
              </a>
              <a 
                href="https://github.com/devdavidrobert" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-100 p-2 sm:p-3 rounded-full dark:bg-primary-900/30 hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-primary-600 dark:text-primary-400 text-lg sm:text-xl" />
              </a>
              <a 
                href="https://twitter.com/devdavidrobert" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-100 p-2 sm:p-3 rounded-full dark:bg-primary-900/30 hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="text-primary-600 dark:text-primary-400 text-lg sm:text-xl" />
              </a>
            </div>
          </div>
        </div>
        
        <form
          className="bg-white p-4 sm:p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-white/80 border border-gray-200 dark:border-gray-700"
          onSubmit={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            
            try {
              const result = await sendEmail({
                from_name: formData.name,
                reply_to: formData.email,
                message: formData.message
              });
              
              if (result.success) {
                toast.success("Message sent successfully! I'll get back to you soon.");
                setFormData({ name: "", email: "", message: "" });
              } else {
                toast.error(result.error || "Failed to send message. Please try again.");
              }
            } catch (error) {
              toast.error("An error occurred. Please try again later.");
              console.error(error);
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          <h3 className="text-gray-800 dark:text-white/90 font-medium mb-3 sm:mb-4 text-base sm:text-lg font-display">Send me a message</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-white/70 mb-1">Name</label>
              <input
                id="name"
                className="w-full h-9 sm:h-10 px-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white/80 focus:ring-2 focus:ring-primary-400 dark:focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all text-sm sm:text-base"
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-white/70 mb-1">Email</label>
              <input
                id="email"
                className="w-full h-9 sm:h-10 px-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white/80 focus:ring-2 focus:ring-primary-400 dark:focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all text-sm sm:text-base"
                name="email"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-white/70 mb-1">Message</label>
              <textarea
                id="message"
                className="w-full h-28 sm:h-36 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white/80 focus:ring-2 focus:ring-primary-400 dark:focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all text-sm sm:text-base"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 h-10 sm:h-12 w-full sm:w-[8rem] bg-primary-600 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-primary-700 active:scale-100 dark:bg-primary-600 dark:hover:bg-primary-500 disabled:scale-100 disabled:bg-opacity-65 disabled:cursor-not-allowed text-sm sm:text-base font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="h-4 w-4 sm:h-5 sm:w-5 animate-spin rounded-full border-b-2 border-white"></div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
