import { FaThumbsUp, FaHeadset } from "react-icons/fa";
import Background from "../assets/Backgroun.png"; // make sure the path is correct
import Roabate from "../assets/Robeat.png";
const HeroSection = () => {
  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] px-4 m-4 mt-32">
        {/* Background Image */}
        <img
          src={Background}
          alt="IT Solutions"
          className="absolute inset-0 w-full h-full object-cover rounded-[53px]"
        />

        {/* Content Box */}
        <div className="relative bg-white/90 shadow-lg rounded-[20px] p-6 md:p-1 max-w-[1319px] text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-red-700">
            KAIZEN IT SOLUTIONS
          </h1>
          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            At Kaizen IT Solutions, we specialize in delivering tailored IT
            services that drive continuous improvement and peak performance. Our
            expert team is dedicated to helping your business thrive in the
            digital age, ensuring sustainable growth and success.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
            GET STARTED TODAY
          </button>
        </div>
      </section>

      {/* ✅ Stats Section */}
      <section className="bg-red-700 text-white py-6 md:py-10 text-center grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center">
          <FaThumbsUp className="text-4xl mb-2" />
          <p className="text-2xl font-bold">99%</p>
          <p className="text-lg">HAPPY CLIENTS</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaHeadset className="text-4xl mb-2" />
          <p className="text-2xl font-bold">24/7</p>
          <p className="text-lg">SUPPORT AVAILABLE</p>
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            WHY CHOOSE US
          </h2>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <li>
              <strong>Trusted & Accredited:</strong> BBB-accredited with an A
              rating—proof of our unwavering commitment to trust, transparency,
              and performance.
            </li>
            <li>
              <strong>Swift Results, Small Business Focus:</strong> Founded in
              July 2023, we bring nimble expertise and personalised support to
              businesses looking to elevate their IT without the typical
              enterprise overhead.
            </li>
            <li>
              <strong>Comprehensive, Proactive Service:</strong> Managed IT:
              Monitoring, maintenance, and rapid troubleshooting before issues
              impact your business.
            </li>
          </ul>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
            GET A FREE IT HEALTH CHECK
          </button>
        </div>

        {/* Robot Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={Roabate}
            alt="Robot"
            className="max-w-xs md:max-w-sm"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
