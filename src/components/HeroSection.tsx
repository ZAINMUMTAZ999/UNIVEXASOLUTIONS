// /* eslint-disable react-hooks/rules-of-hooks */


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

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
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

//   const goToNextImage = () => {
//     setCurrentImageIndex((prevIndex) => 
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPrevImage = () => {
//     setCurrentImageIndex((prevIndex) => 
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToImage = (index: number) => {
//     setCurrentImageIndex(index);
//   };

//   const toggleAutoPlay = () => {
//     setIsAutoPlaying(!isAutoPlaying);
//   };

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

//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

//               {/* Navigation Controls */}
//               <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <motion.button
//                   onClick={goToPrevImage}
//                   className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors shadow-lg flex items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   aria-label="Previous image"
//                 >
//                   <ChevronLeft size={24} />
//                 </motion.button>
                
//                 <motion.button
//                   onClick={goToNextImage}
//                   className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors shadow-lg flex items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   aria-label="Next image"
//                 >
//                   <ChevronRight size={24} />
//                 </motion.button>
//               </div>
//             </div>

//             {/* Image Indicators and Controls */}
//             <div className="flex justify-center items-center gap-6 w-full">
//               <div className="flex gap-3">
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

//               {/* Auto-play Toggle */}
//               <motion.button
//                 onClick={toggleAutoPlay}
//                 className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-purple-600 hover:bg-white transition-all duration-300 shadow-md flex items-center justify-center"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
//                 aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
//               >
//                 {isAutoPlaying ? <Pause size={18} /> : <Play size={18} />}
//               </motion.button>
//             </div>

//             {/* Progress Bar */}
//             {isAutoPlaying && (
//               <div className="w-full bg-gray-200/50 rounded-full h-1 overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 4, ease: "linear", repeat: Infinity }}
//                 />
//               </div>
//             )}
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
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface HeroSectionProps {
  images: string[];
  isLoading?: boolean;
}

// Enhanced Skeleton Loading Component
const HeroSkeleton: React.FC = () => (
  <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50/30 min-h-screen overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-200/35 rounded-full blur-2xl animate-pulse" />
    </div>

    <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-16 lg:py-20 gap-16 lg:gap-20">
        {/* Left Content Skeleton */}
        <div className="flex-1 flex flex-col justify-center space-y-10 animate-pulse max-w-2xl">
          <div className="space-y-4">
            <div className="h-14 sm:h-18 lg:h-22 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-14 sm:h-18 lg:h-22 bg-gray-200 rounded-lg w-4/5"></div>
          </div>
          
          <div className="space-y-4">
            <div className="h-7 bg-gray-200 rounded w-full"></div>
            <div className="h-7 bg-gray-200 rounded w-3/4"></div>
            <div className="h-7 bg-gray-200 rounded w-5/6"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <div className="h-16 bg-gray-200 rounded-xl w-48"></div>
            <div className="h-16 bg-gray-200 rounded-xl w-48"></div>
          </div>
        </div>

        {/* Right Image Skeleton */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8 animate-pulse max-w-2xl w-full">
          <div className="aspect-[5/4] bg-gray-200 rounded-3xl shadow-2xl w-full max-w-xl"></div>
          
          <div className="flex justify-center items-center gap-8 w-full">
            <div className="flex gap-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
              ))}
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
          
          <div className="w-full max-w-lg h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

const HeroSection: React.FC<HeroSectionProps> = ({ images, isLoading = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    }, 5000); // Increased interval for better UX

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50/30 min-h-screen overflow-hidden pt-16 lg:pt-0">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-200/35 rounded-full blur-2xl" />
        {/* Additional background elements for depth */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-16 lg:py-20 gap-16 lg:gap-20">
          
          {/* Left Content - Text Section */}
          <div className="flex-1 flex flex-col justify-center space-y-10 max-w-2xl lg:pr-8">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight">
                Empower Your{" "}
                <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
                  Startup
                </span>{" "}
                with Innovation
              </h1>
            </motion.div>

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Join the future of technology. Let's build scalable, beautiful, and 
              meaningful digital solutions together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link to="/contactUs" className="flex-shrink-0">
                <motion.button
                  className="group relative w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-lg min-w-[180px] flex items-center justify-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>

              <Link to="/allBlogs" className="flex-shrink-0">
                <motion.button
                  className="group relative w-full sm:w-auto px-12 py-5 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-purple-300 hover:bg-white hover:shadow-lg transition-all duration-300 text-lg min-w-[180px] flex items-center justify-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Enhanced Image Carousel */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center space-y-8 max-w-2xl w-full"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main Image Container - Larger and More Professional */}
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm w-full max-w-xl group border border-white/20">
              <AnimatePresence mode="sync">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Startup workspace ${currentImageIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  onClick={goToPrevImage}
                  className="p-4 bg-white/25 backdrop-blur-md rounded-full text-white hover:bg-white/35 transition-all duration-300 shadow-xl flex items-center justify-center border border-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </motion.button>
                
                <motion.button
                  onClick={goToNextImage}
                  className="p-4 bg-white/25 backdrop-blur-md rounded-full text-white hover:bg-white/35 transition-all duration-300 shadow-xl flex items-center justify-center border border-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>
            </div>

            {/* Enhanced Image Indicators and Controls */}
            <div className="flex justify-center items-center gap-8 w-full">
              <div className="flex gap-4">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                      index === currentImageIndex
                        ? "bg-purple-600 w-10 shadow-md"
                        : "bg-gray-300 hover:bg-gray-400 w-4"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Enhanced Auto-play Toggle */}
              <motion.button
                onClick={toggleAutoPlay}
                className="p-4 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-purple-600 hover:bg-white transition-all duration-300 shadow-lg flex items-center justify-center border border-gray-200/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
              </motion.button>
            </div>

            {/* Enhanced Progress Bar */}
            {isAutoPlaying && (
              <div className="w-full max-w-lg bg-gray-200/60 rounded-full h-2 overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-sm"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;