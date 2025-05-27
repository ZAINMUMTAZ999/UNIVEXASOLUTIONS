// /* eslint-disable react-hooks/rules-of-hooks */


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// // import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

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

//     <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//       <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-16 gap-12 lg:gap-16">
//         {/* Left Content Skeleton */}
//         <div className="flex-1 flex flex-col justify-center space-y-8 animate-pulse max-w-2xl">
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

//         {/* Right Image Skeleton */}
//         <div className="flex-1 flex flex-col items-center justify-center space-y-6 animate-pulse max-w-lg w-full">
//           {/* Main Image Skeleton */}
//           <div className="aspect-[4/3] bg-gray-200 rounded-2xl shadow-2xl w-full"></div>
          
//           {/* Controls Skeleton */}
//           <div className="flex justify-center items-center gap-6 w-full">
//             <div className="flex gap-2">
//               {[...Array(3)].map((_, i) => (
//                 <div key={i} className="w-3 h-3 bg-gray-200 rounded-full"></div>
//               ))}
//             </div>
//             <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
//           </div>
          
//           {/* Progress Bar Skeleton */}
//           <div className="w-full h-1 bg-gray-200 rounded-full"></div>
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

//   // const goToNextImage = () => {
//   //   setCurrentImageIndex((prevIndex) => 
//   //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
//   //   );
//   // };

//   // const goToPrevImage = () => {
//   //   setCurrentImageIndex((prevIndex) => 
//   //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
//   //   );
//   // };

//   const goToImage = (index: number) => {
//     setCurrentImageIndex(index);
//   };

//   // const toggleAutoPlay = () => {
//   //   setIsAutoPlaying(!isAutoPlaying);
//   // };

//   return (
//     // <section className="relative bg-white   min-h-screen overflow-hidden">
//     <section  className="relative bg-white min-h-screen overflow-hidden -mt-4 lg:-mt-32">
//       {/* Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-200/25 rounded-full blur-2xl" />
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-16 gap-12 lg:gap-16">
          
//           {/* Left Content - Text Section */}
//           <div className="flex-1 flex flex-col justify-center space-y-8 max-w-2xl">
//             <motion.div
//               initial={{ y: -30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="space-y-6"
//             >
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
//                 Empower Your{" "}
//                 <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
//                   Startup
//                 </span>{" "}
//                 with Innovation
//               </h1>
//             </motion.div>

//             <motion.p
//               className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed font-light max-w-xl"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//             >
//               Join the future of technology. Let's build scalable, beautiful, and 
//               meaningful digital solutions together.
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 pt-6"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               <Link to="/contactUs" className="flex-shrink-0">
//                 <motion.button
//                   className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-lg min-w-[160px] flex items-center justify-center"
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="relative z-10">Get Started</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </motion.button>
//               </Link>

//               <Link to="/allBlogs" className="flex-shrink-0">
//                 <motion.button
//                   className="group relative w-full sm:w-auto px-10 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-purple-300 hover:bg-gray-50 transition-all duration-300 text-lg min-w-[160px] flex items-center justify-center"
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Learn More
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Right Content - Image Carousel */}
//           <motion.div
//             className="flex-1 flex flex-col items-center justify-center space-y-8 max-w-lg w-full"
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             {/* Main Image Container */}
//             <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm w-full group">
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
//             </div>

//             {/* Image Indicators and Controls */}
//             <div className="flex justify-center items-center  w-full">
//               <div className="flex ">
//                 {images.map((_, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => goToImage(index)}
//                     className={`h-3 rounded-full transition-all duration-300 flex items-center justify-center ${
//                       index === currentImageIndex
//                         ? "bg-purple-600 w-8"
//                         : "bg-gray-300 hover:bg-gray-400 w-3"
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
  <section className="relative bg-white min-h-screen overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-200/25 rounded-full blur-2xl" />
    </div>

    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 h-full items-center py-12">
        {/* Left Content Skeleton - 40% on large screens */}
        <div className="lg:col-span-2 flex flex-col justify-center space-y-8 animate-pulse">
          {/* Title Skeleton */}
          <div className="space-y-4">
            <div className="h-12 sm:h-16 lg:h-20 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-12 sm:h-16 lg:h-20 bg-gray-200 rounded-lg w-4/5"></div>
          </div>
          
          {/* Description Skeleton */}
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6"></div>
          </div>
          
          {/* Button Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="h-14 bg-gray-200 rounded-xl w-40"></div>
            <div className="h-14 bg-gray-200 rounded-xl w-40"></div>
          </div>
        </div>

        {/* Right Image Skeleton - 60% on medium+ screens, hidden on mobile */}
        <div className="hidden md:flex md:col-span-3 lg:col-span-3 flex-col items-center justify-center space-y-6 animate-pulse h-full">
          {/* Main Image Skeleton */}
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl shadow-2xl w-full max-w-2xl"></div>
          
          {/* Controls Skeleton */}
          <div className="flex justify-center items-center gap-6">
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-gray-200 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HeroSection: React.FC<HeroSectionProps> = ({ images, isLoading = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying] = useState(true);

  // Show skeleton while loading
  if (isLoading) {
    return <HeroSkeleton />;
  }

  // Auto-advance images
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative bg-white min-h-screen overflow-hidden -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-200/25 rounded-full blur-2xl" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-screen">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 h-full items-center py-2 sm:py-4 md:py-8 lg:py-12">
          
          {/* Left Content - Text Section (40% width on medium+ screens) */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-center space-y-6 md:space-y-8 h-full">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Empower Your{" "}
                <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
                  Startup
                </span>{" "}
                with Innovation
              </h1>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Join the future of technology. Let's build scalable, beautiful, and 
              meaningful digital solutions together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link to="/contactUs" className="flex-shrink-0">
                <motion.button
                  className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-sm md:text-base lg:text-lg min-w-[120px] md:min-w-[140px] lg:min-w-[160px] flex items-center justify-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>

              <Link to="/allBlogs" className="flex-shrink-0">
                <motion.button
                  className="group relative w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-purple-300 hover:bg-gray-50 transition-all duration-300 text-base lg:text-lg min-w-[140px] lg:min-w-[160px] flex items-center justify-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Image Carousel (60% width on large screens, hidden on mobile) */}
          <motion.div
            className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center space-y-8 h-full"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm w-full max-w-2xl group">
              <AnimatePresence mode="sync">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Startup workspace ${currentImageIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
              
              {/* Subtle overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center items-center">
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-purple-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-2.5"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;