import React from "react";
import Camera from "../assets/Cam.png";
const Testimonials = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading + Robot */}
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-gray-500 uppercase tracking-wide text-lg flex flex-col">
            LOOK WHAT
            <span className="text-black font-semibold text-2xl">
              OUR CLIENTS
            </span>
            <span className="text-gray-500 text-lg">HAVE TO SAY.</span>
          </h2>

          {/* Robot Image */}
          <div className="w-96 h-96 md:w-[500px] md:h-[500px]">
            <img
              src={Camera}
              alt="Camera"
              className="w-96 h-96 md:w-[500px] md:h-[500px]"
            />
          </div>

          <div className="bg-gray-100 rounded-xl shadow-sm p-6 text-left w-56 h-72 md:w-72 md:h-96">
            <h3 className="font-semibold text-lg mb-2">Highly Recommend!</h3>
            <p className="text-gray-700">
              Working with Kaizen IT Solutions has been a fantastic experience.
              Their dedication to our success is evident in every interaction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto ">
          {/* Left big block */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="rounded-lg shadow-md overflow-hidden h-80 bg-gray-100">
              <h3 className=" text-lg mb-2">Outstanding Service!</h3>
              <p className="text-gray-700">
                The team at Kaizen IT Solutions provided exceptional service and
                support.
              </p>
            </div>
          </div>

          {/* Two small stacked blocks (equal height) */}
          <div className="flex flex-col gap-4 col-span-1 sm:col-span-4 lg:col-span-2 h-80">
            <div className="rounded-lg shadow-md overflow-hidden flex-1 bg-gray-100">
              <h3 className="text-lg mb-2">Exceptional IT Solutions!</h3>
              <p className="text-gray-700">Exceptional</p>
            </div>
            <div className=" rounded-lg shadow-md overflow-hidden flex-1 bg-gray-100">
              <h3 className=" text-lg mb-2">Exceptional</h3>
            </div>
          </div>

          {/* Big vertical block */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className=" rounded-lg shadow-md overflow-hidden h-80 bg-gray-100">
              <h3 className=" text-lg mb-2">A Game Changer for Us!</h3>
              <p className="text-gray-700">
                The expertise and support from Kaizen IT Solutions have been
                invaluable. They helped us enhance our cybersecurity and
                streamline our operations effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
