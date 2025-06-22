
// /* eslint-disable react-hooks/rules-of-hooks */

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// interface HeroSectionProps {
//   images: string[];
//   isLoading?: boolean;
// }

// // Skeleton Loading Component
// const HeroSkeleton: React.FC = () => (
//   <section className="relative bg-white min-h-screen overflow-hidden">
//     {/* Background Elements */}
//     <div className="absolute inset-0 pointer-events-none">
//       <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
//       <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-200/25 rounded-full blur-2xl" />
//     </div>

//     <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 h-full items-center py-12">
//         {/* Left Content Skeleton - 40% on large screens */}
//         <div className="lg:col-span-2 flex flex-col justify-center space-y-8 animate-pulse">
//           {/* Title Skeleton */}
//           <div className="space-y-4">
//             <div className="h-12 sm:h-16 lg:h-20 bg-gray-200 rounded-lg w-full"></div>
//             <div className="h-12 sm:h-16 lg:h-20 bg-gray-200 rounded-lg w-4/5"></div>
//           </div>
          
//           {/* Description Skeleton */}
//           <div className="space-y-3">
//             <div className="h-6 bg-gray-200 rounded w-full"></div>
//             <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//             <div className="h-6 bg-gray-200 rounded w-5/6"></div>
//           </div>
          
//           {/* Button Skeleton */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <div className="h-14 bg-gray-200 rounded-xl w-40"></div>
//             <div className="h-14 bg-gray-200 rounded-xl w-40"></div>
//           </div>
//         </div>

//         {/* Right Image Skeleton - 60% on medium+ screens, hidden on mobile */}
//         <div className="hidden md:flex md:col-span-3 lg:col-span-3 flex-col items-center justify-center space-y-6 animate-pulse h-full">
//           {/* Main Image Skeleton */}
//           {/* <div className="aspect-[4/3] bg-gray-200 rounded-2xl shadow-2xl w-full max-w-2xl"></div> */}
        
//           {/* Controls Skeleton */}
//           <div className="flex justify-center items-center gap-6">
//             <div className="flex gap-2">
//               {[...Array(3)].map((_, i) => (
//                 <div key={i} className="w-3 h-3 bg-gray-200 rounded-full"></div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const HeroSection: React.FC<HeroSectionProps> = ({ images, isLoading = false }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isAutoPlaying] = useState(true);

//   // Show skeleton while loading
//   if (isLoading) {
//     return <HeroSkeleton />;
//   }

//   // Auto-advance images
//   useEffect(() => {
//     if (!isAutoPlaying || images.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => 
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, images.length]);

//   const goToImage = (index: number) => {
//     setCurrentImageIndex(index);
//   };

//   return (

//   <section className="relative bg-white   ">
//       {/* Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-200/25 rounded-full blur-2xl" />
//       </div>

//       {/* Main Content Container */}
      
//       <div className="relative z-10 container mx-auto px-4 sm:px-6  max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-5  gap-6 md:gap-8 lg:gap-12 h-full items-center py-2 sm:py-4 md:py-8 lg:py-12">
          
//           {/* Left Content - Text Section (40% width on medium+ screens) */}
//           <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-center space-y-6 md:space-y-8 h-full">
//             <motion.div
//               initial={{ y: -30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="space-y-6"
//             >
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
//             The
             
//                 <span className="bg-gradient-to-r ml-2 from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
//                  {/* Startup Success */}
//                 Tech
//              {" "}
//                 </span>

//               Partner for
//                 <span className="bg-gradient-to-r ml-2 from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
//                  {/* Startup Success */}
//                Startup  
                
//              {" "}
//                 </span>
//                Success  
                 
             
                
//               </h1>
//               <div className="inline-flex items-center   bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 rounded">
//                 <span className="text-sm font-mono text-purple-700 tracking-wide">
//                  • Web Apps • Mobile Apps • Digital Marketing • WordPress <br />
//                  • Cloud Solutions
//                 </span>
//               </div>
//             </motion.div>
           
//             <motion.p
//               className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed font-light"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//             >
//            From concept to launch, we deliver the complete digital ecosystem your startup needs to compete and scale
//             </motion.p>

           
//              <motion.div
//               className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 md:pt-8"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               <Link to="/contactUs" className="flex-shrink-0">
//                 <motion.button
//                   className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden text-base md:text-lg lg:text-xl min-w-[160px] md:min-w-[180px] lg:min-w-[200px] flex items-center justify-center transform hover:scale-105"
//                   whileHover={{ scale: 1.05, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="relative z-10 flex items-center">
//                     Get Started Now
//                     <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </motion.button>
//               </Link>

//               <Link to="/services" className="flex-shrink-0">
//                 <motion.button
//                   className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 font-bold rounded-2xl hover:border-purple-400 hover:bg-white hover:shadow-xl transition-all duration-500 text-base md:text-lg lg:text-xl min-w-[160px] md:min-w-[180px] lg:min-w-[200px] flex items-center justify-center transform hover:scale-105"
//                   whileHover={{ scale: 1.05, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="flex items-center">
//                     Explore Services
//                     <svg className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                     </svg>
//                   </span>
//                 </motion.button>
//               </Link>
//             </motion.div>

//           </div>
          

//           {/* Right Content - Image Carousel (60% width on large screens, hidden on mobile) */}
//           <motion.div
//             className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center space-y-32 h-full"
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             {/* Main Image Container */}
//             <div className="relative aspect-[5/3] rounded-full mt-12 overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm w-full max-w-2xl group">
//               <AnimatePresence mode="sync">
//                 <motion.img
//                   key={currentImageIndex}
//                   src={images[currentImageIndex]}
//                   alt={`Startup workspace ${currentImageIndex + 1}`}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   initial={{ opacity: 0, scale: 1.05 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                 />
//               </AnimatePresence>
              
//               {/* Subtle overlay for better text readability if needed */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
//             </div>

//             {/* Image Indicators */}
//             <div className="flex justify-center items-center">
//               <div className="flex gap-2">
//                 {images.map((_, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => goToImage(index)}
//                     className={`h-2.5 rounded-full transition-all duration-300 ${
//                       index === currentImageIndex
//                         ? "bg-purple-600 w-8"
//                         : "bg-gray-300 hover:bg-gray-400 w-2.5"
//                     }`}
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.8 }}
//                     aria-label={`Go to image ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  images: string[];
  isLoading?: boolean;
}

// Skeleton Loading Component
const HeroSkeleton: React.FC = () => (
  <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
    </div>
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="md:col-span-2 flex flex-col justify-center space-y-8 animate-pulse">
          <div className="space-y-4">
            <div className="h-14 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-14 bg-gray-200 rounded-lg w-4/5"></div>
          </div>
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded w-full"></div>
            <div className="h-5 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="h-16 bg-gray-200 rounded-2xl w-48"></div>
            <div className="h-16 bg-gray-200 rounded-2xl w-48"></div>
          </div>
        </div>
        {/* MODIFIED: Skeleton now hints at the 3D perspective to prevent layout shift */}
        <div className="hidden md:flex md:col-span-3 h-[600px] items-center justify-center animate-pulse">
           <div className="w-full h-full max-h-[550px] bg-gray-200 rounded-3xl transform -rotate-y-3"></div>
        </div>
      </div>
    </div>
  </section>
);


const HeroSection: React.FC<HeroSectionProps> = ({ images, isLoading = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index: number) => setCurrentImageIndex(index);

  if (isLoading) {
    return <HeroSkeleton />;
  }

  // Animation variants for staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative -mt-32 bg-white min-h-screen flex items-center overflow-x-hidden py-16 md:py-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-12 lg:gap-x-16 items-center">
          
          {/* --- Left Content: Staggered Animation --- */}
          <motion.div
            className="md:col-span-2 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center bg-purple-100/60 text-purple-700 font-medium text-sm px-4 py-1.5 rounded-full mb-6">
              Next-Generation Development
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tighter"
            >
              The Tech Partner for
              <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mt-2">
                Startup Success
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-slate-600 max-w-md mx-auto md:mx-0"
            >
              From concept to launch, we deliver the complete digital ecosystem your startup needs to compete and scale globally.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link to="/contactUs">
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                </motion.button>
              </Link>
              <Link to="/services">
                 <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-bold text-lg rounded-xl hover:border-purple-400 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* --- Right Content: 3D Perspective Image --- */}
          <div className="md:col-span-3" style={{ perspective: '1500px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -20, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px]"
            >
              {/* MODIFIED: Sophisticated glow effect */}
              <div className="absolute inset-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-20 blur-3xl -z-10"></div>

              <AnimatePresence>
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Showcase ${currentImageIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </AnimatePresence>

              {/* Image Indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white/90 w-8 shadow"
                        : "bg-white/40 hover:bg-white/60 w-2.5"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;