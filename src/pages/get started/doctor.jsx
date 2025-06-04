import React from "react";
import Navbar from "../navbar/navbar";
import Lottie from "lottie-react";
import heartAnim from "../../assets/const.json";

const Doctor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-lime-50 to-green-50 relative overflow-hidden">
      <Navbar />
      <div className="pt-32 flex justify-center items-center z-10 relative px-4 min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-5xl">
          <Lottie animationData={heartAnim} loop autoplay style={{ height: '500px', width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Doctor;