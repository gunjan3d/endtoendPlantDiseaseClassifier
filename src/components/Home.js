import React, { useState } from "react";
import backgroundImage from "./background.jpg"; // Import your background image


const HomePage = () => {
  const [showNextComponent, setShowNextComponent] = useState(false);

  const handleTransitionEnd = () => {
    setShowNextComponent(true);
  };

  return (
    <>
      <div
        className={`relative transition-opacity duration-1000 ease-in-out ${
          showNextComponent ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Your content */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg flex items-center justify-center">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 sm:top-1/5 sm:left-1/2 sm:-translate-y-1/5 p-6 text-white">
            <h1 className="text-4xl font-bold text-black">Welcome to Our Website</h1>
            <p className="mt-4 my-5 text-lg text-black">This is our awesome home page!</p>
            <div className="flex justify-center m-5 p-5"> 
              <div className="flex mx-5 my-5 justify-center"></div>
              <p className="text-black">
                <b>for prediction please scroll downwards</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
