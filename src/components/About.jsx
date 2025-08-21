const About = () => {
  return (
   <div className="font-sans text-gray-800 mt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">A Full Service Locksmith Since 1984</p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
            Call (451) 350-3992
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src="https://via.placeholder.com/200" alt="" className="rounded-lg shadow" />
          <img src="https://via.placeholder.com/200" alt="" className="rounded-lg shadow" />
          <img src="https://via.placeholder.com/200" alt="" className="rounded-lg shadow" />
          <img src="https://via.placeholder.com/200" alt="" className="rounded-lg shadow" />
        </div>
        <div>
          <p className="uppercase text-sm text-gray-500 tracking-wider">Since 1984</p>
          <h2 className="text-3xl font-bold mb-4">We Are A Full Service Locksmith Shop</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod.
          </p>
          <p className="font-semibold">
            As licensed locksmith professionals, we know the value of safety and security.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 px-6 md:px-20 text-center">
        <h2 className="text-2xl font-bold mb-10">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Residential</h3>
            <p className="text-sm mb-4">We provide full home locksmith services for safety and security.</p>
            <button className="underline">Learn More</button>
          </div>
          <div className="bg-yellow-800 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Commercial</h3>
            <p className="text-sm mb-4">Secure your business with our trusted locksmith solutions.</p>
            <button className="underline">Learn More</button>
          </div>
          <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Automotive</h3>
            <p className="text-sm mb-4">Car lockouts, key replacements, ignition repair and more.</p>
            <button className="underline">Learn More</button>
          </div>
        </div>
        <button className="mt-8 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow">
          Talk With A Locksmith
        </button>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Home, Commercial, Auto, <br /> You Name It, We'll Be There.
        </h2>
        <p className="mb-6">Serving Your Local Area</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg">
          Call (451) 350-3992
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6 md:px-20 grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h4 className="font-bold mb-2">Head Office</h4>
          <p>136 Botsford Valleys Apt. 264</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Call Us</h4>
          <p>(451) 321-3922</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Email Us</h4>
          <p>info@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
