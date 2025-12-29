import React from "react";

const Footer = () => {
  return (
    <>
      <div className="md:flex justify-between p-4 bg-black">
        <div className="text-white">
          <h1 className="font-bold">Apex App Builders</h1>
          <div className="flex gap-3 md:my-3.5 my-7">
            <p>
              <i className="fa-brands fa-twitter"></i>
            </p>
            <p>
              <i className="fa-brands fa-facebook"></i>
            </p>
            <p>
              <i className="fa-brands fa-instagram"></i>
            </p>
            <p>
              <i className="fa-brands fa-linkedin"></i>
            </p>
            <p>
              <i className="fa-brands fa-google-play"></i>
            </p>
            <p>
              <i className="fa-brands fa-app-store-ios"></i>
            </p>
          </div>
        </div>
        <div className="text-white flex gap-3 items-center">
          <p>About us</p>
          <p> Join</p>
          <p>Customar Support</p>
          <p>Jobs</p>
          <p>Legel</p>
        </div>
        <div className="text-white">
          <h1 className="font-semibold text-2xl my-4">subscribe Our Apex App Builders</h1>
          <div className="flex items-center gap-2">
          <input type="text" placeholder="Write your email" className="input text-white border-gray-500 border-2 bg-black" />
          <button className="btn my-4">Submit</button>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;