import React from "react";
import Camera from "../assets/Cam.png";

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
     <div className="max-w-[90rem] mx-auto px-4 py-10 mr-18">
        {/* Heading + Robot + Card */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mr-10">
          {/* Heading */}
          <h2 className="text-gray-500 uppercase tracking-wide text-lg flex flex-col text-left ">
            LOOK WHAT
            <span className="text-black text-2xl">OUR CLIENTS</span>
            <span className="text-gray-500 text-lg">HAVE TO SAY.</span>
          </h2>

          {/* Camera Image */}
          <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <img
              src={Camera}
              alt="Camera"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Highlight Card */}
          <div className="bg-gray-100 rounded-xl shadow-sm p-6 text-left w-full sm:w-60 md:w-76 h-auto md:h-76">
            <h3 className="font-semibold text-lg mb-6">Highly Recommend!</h3>
            <p className="text-gray-700">
              Working with Kaizen IT Solutions has been a fantastic experience.
              Their dedication to our success is evident in every interaction.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-12 ml-20">
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
