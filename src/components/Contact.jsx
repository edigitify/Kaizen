const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-800/60 backdrop-blur-lg p-10 rounded-2xl shadow-2xl">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Let’s connect! Fill out the form below and our team will get back to you shortly.
        </p>

        {/* Form */}
        <form className="mt-10 space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-gray-400">📍 New Delhi, India</p>
          <p className="text-gray-400">📞 +91 98765 43210</p>
          <p className="text-gray-400">✉️ contact@kaizen.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
