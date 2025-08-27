import { motion } from "framer-motion";

// Import logos
import CiscoLogo from "../assets/Image/1.png";
import FortigateLogo from "../assets/Image/2.png";
import MicrosoftLogo from "../assets/Image/5.jpg";
import LenovoLogo from "../assets/Image/3.jpg";
import DellLogo from "../assets/Image/4.jpg";
import VeeamLogo from "../assets/Image/6.jpg";

const products = [
  {
    name: "CISCO",
    desc: "Advanced networking and cybersecurity solutions for enterprises worldwide.",
    logo: CiscoLogo,
  },
  {
    name: "FORTIGATE",
    desc: "Next-generation firewall and security solutions to safeguard your IT infrastructure.",
    logo: FortigateLogo,
  },
  {
    name: "MICROSOFT",
    desc: "Empower your business with Office 365, Azure Cloud, and collaboration tools.",
    logo: MicrosoftLogo,
  },
  {
    name: "LENOVO",
    desc: "Reliable enterprise hardware and smart devices designed for performance.",
    logo: LenovoLogo,
  },
  {
    name: "DELL",
    desc: "High-performance servers, laptops, and storage solutions for modern businesses.",
    logo: DellLogo,
  },
  {
    name: "VEEAM",
    desc: "Industry-leading backup, disaster recovery, and data management software.",
    logo: VeeamLogo,
  },
];

const Product = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-40 animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-40 animate-pulse"
      />

      {/* Page Content */}
      <div className="relative z-10 text-center max-w-6xl px-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4"
        >
          Our <span className="text-[#B81616]">Products</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-600 mb-12"
        >
          Innovative IT solutions designed to scale with your business
        </motion.p>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:shadow-red-900/100 hover:-translate-y-2  transition-all duration-300 flex flex-col items-center"
            >
              <img
                src={product.logo}
                alt={product.name}
                className="h-16 w-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-center">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
