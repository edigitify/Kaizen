import { FaThumbsUp, FaHeadset } from "react-icons/fa";
import Background from "../assets/Backgroun.png";

import Arrow from "../assets/Arrow.png";

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] px-4 m-4 mt-32">
        <img
          src={Background}
          alt="IT Solutions"
          className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
        />

        {/* Content Box */}
        <div className="relative bg-white/90 shadow-lg rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-12 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-[1319px] mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-700">
            KAIZEN IT SOLUTIONS
          </h1>
          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 sm:px-6 md:px-0">
            At Kaizen IT Solutions, we specialize in delivering tailored IT
            services that drive continuous improvement and peak performance. Our
            expert team is dedicated to helping your business thrive in the
            digital age, ensuring sustainable growth and success.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transition text-sm sm:text-base md:text-lg">
            GET STARTED TODAY
          </button>
        </div>
      </section>

      {/*  Stats Section */}
      <section className="text-white py-6 md:py-10 grid grid-cols-1 md:grid-cols-[0.5fr_2.5fr] gap-6 items-center text-center">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <img src={Arrow} alt="Arrow" className="w-40 h-40 md:w-48 md:h-40" />
        </div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-900 w-full p-6">
          <div className="flex flex-row items-center justify-center gap-3 p-6 rounded-2xl">
            <div className="border-2 white flex flex-row gap-4">
            <FaThumbsUp className="text-4xl text-white" />
            <div className="flex items-center justify-center gap-2 text-center">
              <p className="text-2xl font-bold">99%</p>
              </div>
              </div>
              <p className="text-lg flex flex-col">
                <span className="block">HAPPY</span>
                <span className="block">CLIENTS</span>
              </p>
            
          </div>

          <div className="flex flex-row items-center justify-center gap-3 p-6 rounded-2xl ">
            <div className="border-2 white flex flex-row gap-4">
            <FaHeadset className="text-4xl text-white" />
            <div className="flex items-center justify-center gap-2 text-center">
              <p className="text-2xl font-bold">24/7</p>
              </div>
              </div>
              <p className="text-lg flex flex-col">
                SUPPORT <span className="ml-1">AVAILABLE</span>
              </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
