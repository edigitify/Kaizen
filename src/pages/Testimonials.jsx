import React from "react";
import Camera from "../assets/Cam1.png";

const Testimonials = () => {
  return (
    <section className="w-full bg-white">
      {/* ✅ Container अब responsive है */}
      <div className="w-full mx-auto px-4 lg:max-w-6xl">
        {/* Heading + Robot + Card */}
        <div className="flex flex-row items-center justify-between gap-4">
          {/* Heading */}
          <h2 className="text-gray-500 uppercase tracking-wide text-sm sm:text-base flex flex-col text-left w-28 sm:w-auto">
            LOOK WHAT
            <span className="text-black text-lg sm:text-2xl">OUR CLIENTS</span>
            <span className="text-gray-500 text-sm sm:text-lg">
              HAVE TO SAY.
            </span>
          </h2>

          {/* Camera Image - Mobile */}
          <div className="w-20 h-60 sm:w-40 sm:h-60 md:hidden">
            <img
              src={Camera}
              alt="Camera Mobile"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Camera Image - Tablet & Desktop */}
          <div className="hidden md:block w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <img
              src={Camera}
              alt="Camera"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Highlight Card */}
          <div className="bg-gray-100 rounded-xl shadow-sm p-3 sm:p-6 text-left w-32 sm:w-64 md:w-80 h-auto">
            <h3 className="font-semibold text-sm sm:text-lg mb-2 sm:mb-6">
              Highly Recommend!
            </h3>
            <p className="text-gray-700 text-xs sm:text-base">
              Working with Kaizen IT Solutions has been a fantastic experience.
              Their dedication to our success is evident in every interaction.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-12">
          {/* Left big block */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex justify-center">
            <div className="max-w-sm rounded-lg shadow-md h-auto sm:h-80 bg-gray-100 p-6 text-left">
              <h3 className="text-lg mb-4">Outstanding Service!</h3>
              <p className="text-gray-700">
                The team at Kaizen IT Solutions provided exceptional service and
                support.
              </p>
            </div>
          </div>

          {/* Two stacked blocks */}
          <div className="flex flex-col gap-6 col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="rounded-lg shadow-md flex-1 bg-gray-100 p-6 text-left">
              <h3 className="text-lg mb-2">Exceptional IT Solutions!</h3>
              <p className="text-gray-700">They exceeded expectations!</p>
            </div>
            <div className="rounded-lg shadow-md flex-1 bg-gray-100 p-6 text-left">
              <h3 className="text-lg mb-2">Professional Team</h3>
              <p className="text-gray-700">
                Always responsive and reliable to work with.
              </p>
            </div>
          </div>

          {/* Big vertical block */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="rounded-lg shadow-md h-auto sm:h-80 bg-gray-100 p-6 text-left">
              <h3 className="text-lg mb-4">A Game Changer for Us!</h3>
              <p className="text-gray-700">
                The expertise and support from Kaizen IT Solutions have been
                invaluable. They helped us enhance our cybersecurity and
                streamline operations effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
