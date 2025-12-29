import React from "react";
import Navbar from "../Component/Header/Navbar";
import Footer from "../Component/Header/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[full ] mx-auto flex flex-col min-h-screen">
      <Navbar />
      <Footer/>

    </div>
  );
};

export default MainLayout;
