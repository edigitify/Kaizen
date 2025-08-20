import Robot from "../assets/Rob.png";

const ChooseSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center relative">
      {/* Text */}
      <div className="relative w-full md:w-1/2 max-w-6xl px-4  p-6 rounded-lg z-10">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
          WHY CHOOSE US
        </h2>
        <ul className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <li>
            <strong>Trusted & Accredited:</strong>
            <p className="flex flex-col">
              BBB-accredited with an A rating—proof of our unwavering
              commitment to trust, transparency, and
            </p>
            <span>performance.</span>
          </li>
          <li>
            <strong>Swift Results, Small Business Focus:</strong>
            <p className="flex flex-col">
              Founded in July 2023, we bring nimble expertise and personalised
              support to businesses looking to elevate
            </p>
            <span>their IT without the typical enterprise overhead.</span>
          </li>
          <li>
            <strong>Comprehensive, Proactive Service:</strong>
            <p>
              Managed IT: Monitoring, maintenance, and rapid troubleshooting
              before issues impact your business.
            </p>
          </li>
        </ul>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
          GET A FREE IT HEALTH CHECK
        </button>
      </div>

      {/* Robot Image */}
      <div className="absolute right-0 bottom-0 w-full flex justify-end items-end">
        <img
          src={Robot}
          alt="Robot"
          className="max-h-[500px] object-contain"
        />
      </div>
    </section>
  );
};

export default ChooseSection;
