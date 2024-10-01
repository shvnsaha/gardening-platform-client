
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-68px)]">
       {children}
      </div>
      <Footer/>
    </div>
  );
};

export default CommonLayout;