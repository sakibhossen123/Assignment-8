import React from "react";
import Navbar from "../Component/Header/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col min-h-screen">
      <Navbar />
    </div>
  );
};

export default MainLayout;
