const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl text-center space-y-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight">
          About <span className="text-blue-500">HM Kaizen</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-300">
          Driving Digital Transformation with Innovation, Excellence, and Trust.
        </p>

        {/* Content */}
        <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
          <p className="text-lg leading-relaxed text-gray-200">
            HM Kaizen is a next-generation IT company committed to delivering cutting-edge
            technology solutions for businesses worldwide. With a focus on{" "}
            <span className="text-blue-400 font-semibold">innovation, scalability,</span> and{" "}
            <span className="text-blue-400 font-semibold">customer satisfaction</span>, 
            we empower organizations to stay ahead in the ever-evolving digital era.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            Our expertise spans across{" "}
            <span className="text-blue-400">software development, cloud solutions,
            AI-driven applications, enterprise IT services,</span> and{" "}
            <span className="text-blue-400">cybersecurity.</span> 
            At HM Kaizen, we believe in blending technology with creativity to 
            deliver tailor-made solutions that create lasting impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-400">10+</h3>
            <p className="text-gray-300">Years of Excellence</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-400">500+</h3>
            <p className="text-gray-300">Projects Delivered</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-400">100+</h3>
            <p className="text-gray-300">Global Clients</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
            <p className="text-gray-300">Support & Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
