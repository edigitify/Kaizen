import { Monitor, Palette, Workflow, Shield, Headphones } from "lucide-react";
import Background from "../assets/Back.png";
const ServicesSection = () => {
  const services = [
    {
      title: "Consulting",
      description:
        "Custom applications built to solve business challenges with speed, scalability, and performance.",
      icon: <Monitor className="w-10 h-10 text-[#B81616]" />,
    },
    {
      title: "Designing",
      description:
        "Secure, scalable, and cost-efficient cloud infrastructure tailored to your needs.",
      icon: <Palette className="w-10 h-10 text-[#B81616]" />,
    },
    {
      title: "Implementation",
      description:
        "Intelligent AI-driven solutions to streamline operations and enhance decision-making.",
      icon: <Workflow className="w-10 h-10 text-[#B81616]" />,
    },
  ];

  return (
    <section className="min-h-96 bg-[#B81616] text-black px-6 py-10 mt-20"
     style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-black">
          IT <span className="text-white">Services</span>
        </h1>
        <p className="mt-4 text-lg text-white">
          IT Services which enable organizations reduce TCO, increase business
          value & accelerate ROI
        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-white/100 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#B81616]">
                {service.title}
              </h3>
              <p className="mt-3 text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-center mt-10">
  <button className="h-10 flex justify-center items-center px-6 rounded-lg shadow-md bg-gray-200">
    See More...
  </button>
</div>

    </section>
  );
};
export default ServicesSection;
