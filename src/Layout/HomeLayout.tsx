
import React from "react";
import Header from "../components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with sticky positioning */}
      <Header />
      
   
        < > 
          {children}
        </>
 
      <Footer />
     
    </div>
  );
};

export default HomeLayout;