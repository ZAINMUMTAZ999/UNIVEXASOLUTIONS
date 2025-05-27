
import HeroSection from "@/components/HeroSection";

// Import your images
import img1 from "../assets/landing page/landing (1).webp";
import img2 from "../assets/landing page/landing (2).webp";
import img3 from "../assets/landing page/landing (3).webp";
import img4 from "../assets/landing page/landing (4).webp";
import img5 from "../assets/landing page/landing (5).webp";
// import img6 from "../assets/landing page/landing (6).webp";

import TechStack from "@/components/TechStack";
import { BlogsLaningPage } from "@/components/BlogsLaningPage";
import WorkingMethodology from "@/components/WorkingMethodolgy";
import { GetallReviews } from "@/components/GetallReviews";
import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
import WhatsAppLinkButton from "@/components/WA";

const imageList = [img1, img2, img3, img4, img5];

const LandingPage = () => {
  return (
    <>
      <HeroSection images={imageList} />
      
      {/* Fixed WhatsApp Button - Positioned as floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppLinkButton 
          phoneNumber="923166409948" 
          message="Hi, I'm interested in your services!" 
        />
      </div>
      
      <TechStack/>
      <WorkingMethodology/>
      
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="flex justify-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block">
            Customer's Reviews
          </span>
        </h1>
      </motion.div>
      
      <GetallReviews/>
      <BlogsLaningPage/>
      {/* Add other sections here as needed */}
    </>
  );
};

export default LandingPage;