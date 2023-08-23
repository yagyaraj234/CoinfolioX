import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              Experience the thrill of monitoring live crypto prices while keeping an eye on your digital fortune.
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-600">
              CryptoLife offers a seamless user interface to help both crypto experts and beginners manage their investments with ease. Effortlessly visualize the fluctuating crypto market and make informed decisions.
            </p>
            {/* Add any call to action buttons */}
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
