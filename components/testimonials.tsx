// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import Image from "next/image";

// // const testimonials = [
// //   {
// //     name: "Sarah Johnson",
// //     title: "CTO at TechVision",
// //     image: "https://randomuser.me/api/portraits/women/32.jpg",
// //     text: "David is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He quickly became an invaluable asset to our team.",
// //   },
// //   {
// //     name: "Michael Chen",
// //     title: "Product Manager at DataFlow",
// //     image: "https://randomuser.me/api/portraits/men/46.jpg",
// //     text: "Working with David was a pleasure. He has a remarkable ability to translate complex requirements into elegant solutions. His technical expertise and communication skills make him a standout professional.",
// //   },
// //   {
// //     name: "Emily Rodriguez",
// //     title: "Lead Developer at InnovateTech",
// //     image: "https://randomuser.me/api/portraits/women/65.jpg",
// //     text: "David's analytical approach to challenges and his dedication to continuous improvement are impressive. He consistently goes above and beyond to ensure project success and team satisfaction.",
// //   },
// // ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// export default function Testimonials() {
//   const { ref } = useSectionInView("Testimonials");

//   return (
//     <section
//       id="testimonials"
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40 mx-auto px-4"
//     >
//       <SectionHeading>What People Say</SectionHeading>
      
//       <div className="text-center mb-8">
//         <p className="text-gray-700 dark:text-white/70">
//           Here's what colleagues and clients have to say about working with me.
//         </p>
//       </div>
      
//       <motion.div 
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {/* {testimonials.map((testimonial, index) => (
//           <motion.div 
//             key={index}
//             className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800 dark:text-white/80 border border-gray-200 dark:border-gray-700 flex flex-col h-full"
//             variants={itemVariants}
//           >
//             <div className="flex-grow mb-4">
//               <p className="italic text-gray-700 dark:text-white/70">"{testimonial.text}"</p>
//             </div>
            
//             <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
//               <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
//                 {/* Fallback for image loading issues */}
//                 <span className="absolute text-gray-500 dark:text-gray-400 font-bold">{testimonial.name.charAt(0)}</span>
//                 <Image 
//                   src={testimonial.image} 
//                   alt={testimonial.name} 
//                   fill 
//                   className="object-cover z-10"
//                 />
//               </div>
//               <div>
//                 <h4 className="font-medium text-gray-900 dark:text-white/90">{testimonial.name}</h4>
//                 <p className="text-sm text-gray-600 dark:text-white/60">{testimonial.title}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))} */}
//       </motion.div>
//     </section>
//   );
// }
