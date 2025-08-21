const Services = () => {
  const services = [
    {
      title: "Software Development",
      description:
        "Custom applications built to solve business challenges with speed, scalability, and performance.",
      icon: "💻",
    },
    {
      title: "Cloud Solutions",
      description:
        "Secure, scalable, and cost-efficient cloud infrastructure tailored to your needs.",
      icon: "☁️",
    },
    {
      title: "AI & Automation",
      description:
        "Intelligent AI-driven solutions to streamline operations and enhance decision-making.",
      icon: "🤖",
    },
    {
      title: "Cybersecurity",
      description:
        "End-to-end security services to protect your data, networks, and business assets.",
      icon: "🔒",
    },
    {
      title: "IT Consulting",
      description:
        "Expert advice to optimize IT strategy, reduce costs, and boost efficiency.",
      icon: "📊",
    },
    {
      title: "24/7 Support",
      description:
        "Reliable technical support around the clock to keep your systems running smoothly.",
      icon: "⚡",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-16 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight">
          Our <span className="text-blue-500">Services</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Empowering businesses with next-gen IT solutions tailored for growth and innovation.
        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-400">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
