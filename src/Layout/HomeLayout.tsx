
import React from "react";
import Header from "../components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with sticky positioning */}
      <Header />
      
      {/* Main content area with proper spacing and responsive padding */}
      <main className="flex-grow w-full -mt-10">
        <div className="min-h-[calc(100vh-theme(spacing.16))] sm:min-h-[calc(100vh-theme(spacing.20))]"> 
          {children}
        </div>
 </main>
      <Footer />
     
    </div>
  );
};

export default HomeLayout;