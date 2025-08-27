import { Monitor, Palette, Workflow, Shield, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Consulting",
      description:
        "Custom applications built to solve business challenges with speed, scalability, and performance.",
      icon: <Monitor className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "Designing",
      description:
        "Secure, scalable, and cost-efficient cloud infrastructure tailored to your needs.",
      icon: <Palette className="w-10 h-10 text-pink-400" />,
    },
    {
      title: "Implementation",
      description:
        "Intelligent AI-driven solutions to streamline operations and enhance decision-making.",
      icon: <Workflow className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Managed Services",
      description:
        "End-to-end security services to protect your data, networks, and business assets.",
      icon: <Shield className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "24/7 Support",
      description:
        "Reliable technical support around the clock to keep your systems running smoothly.",
      icon: <Headphones className="w-10 h-10 text-purple-400" />,
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-black">
          IT <span className="text-red-700">Services</span>
        </h1>
        <p className="mt-4 text-lg text-black">
          IT Services which enable organizations reduce TCO, increase business
          value & accelerate ROI
        </p>

        {/* Intro Text */}
        <section className="bg-via-gray-900 text-black text-center py-16 px-6 md:px-20 text-base md:text-lg">
          <p className="max-w-6xl mx-auto leading-relaxed">
            IT infrastructure and IT services are the basis of every modern
            business. To achieve their maximal efficiency, their design and
            implementation should be specific to the requirements of every
            single organization. Kaizen Networks is one of the leading IT
            Services company in Dubai, UAE and provides a broad portfolio of
            end-to-end IT services and support that help customers reduce total
            cost of ownership, increase business value and accelerate return on
            investment.
          </p>
        </section>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-red-900/100 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#B81616]">
                {service.title}
              </h3>
              <p className="mt-3 text-black">{service.description}</p>
             
              <div className="mt-8 ">
                <button className="bg-[#B81616] w-full h-10 rounded-xl text-white text-xl">Get In Toch</button>
              </div>
            </div>
          ))}
           
        </div>
      </div>
    </section>
  );
};

export default Services;
