import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="text-start">
      <h1 className="text-[#403F3F] font-semibold text-xl mt-7 mb-5">Find Us On</h1>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn justify-start join-item">
           <FaFacebook></FaFacebook> Facebook</button>
        <button className="btn justify-start join-item">
           <FaTwitter></FaTwitter> Twitter</button>
        <button className="btn justify-start join-item">
           <FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
