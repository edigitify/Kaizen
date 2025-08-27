import React from "react";
import SolutionSection from "./SolutionSection";
import cyberImg from "../assets/Solution/1.jpg";
import networkImg from "../assets/Solution/2.jpg";
import Unifo from "../assets/Solution/3.jpg";
import Itinfo from "../assets/Solution/4.jpg";
import Evn from "../assets/Solution/5.jpg";
import Background from "../assets/Solution/6.jpeg";
// ✅ Import Lucide icons
import {
  Shield,
  Search,
  Wifi,
  Router,
  Server,
  Phone,
  Cable,
} from "lucide-react";

const Solutions = () => {
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-black px-6 h-96 "
        // style={{
        //   backgroundImage: `url(${Background})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   height: "50vh",
        // }}
      >
        <div className="bg-white/50 absolute inset-0"></div>{" "}
        {/* overlay (optional) */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold">IT Solutions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-black text-base md:text-lg">
            Comprehensive IT solutions that deliver security, performance, cost
            savings, and flexibility.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="bg-[#B81616] text-black text-center py-16 px-6 md:px-20 text-base md:text-lg">
        <p className="max-w-6xl mx-auto leading-relaxed text-white">
          In today’s dynamic business environment, information technology is an
          integral part of every organization. It forms the foundation for all
          current operations and future growth. Kaizen Networks aims to address
          customers’ business needs by providing customized solutions with a
          strong focus on security, performance, and flexibility.
        </p>
      </section>

      {/* Cybersecurity */}
      <SolutionSection
        title="Cybersecurity Solutions"
        description="Protect your business from threats with advanced cybersecurity solutions designed to safeguard, prevent, and recover from cyberattacks."
        image={cyberImg}
        features={[
          {
            icon: <Shield className="w-6 h-6 text-white" />,
            title: "Next-Generation Firewall (NGFW)",
            text: "Advanced firewalls that intelligently filter and monitor network traffic to secure your organization.",
          },
          {
            icon: <Search className="w-6 h-6 text-white" />,
            title: "Advanced Malware Protection (AMP)",
            text: "Continuous monitoring and detection to defend against evolving malicious threats.",
          },
        ]}
      />

      {/* Networking */}
      <SolutionSection
        title="Networking Solutions"
        description="Build high-performance networks that provide stability, security, and seamless connectivity."
        image={networkImg}
        reverse
        features={[
          {
            icon: <Router className="w-6 h-6 text-white" />,
            title: "Routers & Switches",
            text: "Reliable devices that connect and manage communication between computers, servers, and peripherals.",
          },
          {
            icon: <Wifi className="w-6 h-6 text-white" />,
            title: "Enterprise Mobility",
            text: "Enable secure and seamless communication across internal and external networks.",
          },
        ]}
      />

      {/* Datacenter */}
      <SolutionSection
        title="Data Center Solutions"
        description="Enhance collaboration, improve user experience, and increase productivity with secure and reliable data center solutions."
        image={Unifo}
        features={[
          {
            icon: <Server className="w-6 h-6 text-white" />,
            title: "Collaboration Tools",
            text: "Empowering teams with secure platforms to connect, communicate, and collaborate effectively.",
          },
          {
            icon: <Phone className="w-6 h-6 text-white" />,
            title: "IP Telephony",
            text: "Cost-effective communication systems that simplify processes, save expenses, and boost productivity.",
          },
        ]}
      />

      {/* IT Infrastructure */}
      <SolutionSection
        title="IT Infrastructure"
        description="A well-optimized IT infrastructure ensures reliable operations today and provides a solid foundation for future growth."
        image={Itinfo}
        reverse
        features={[
          {
            icon: <Server className="w-6 h-6 text-white" />,
            title: "Server Racks",
            text: "Secure and efficient solutions to host multiple pieces of network and server equipment in one location.",
          },
          {
            icon: <Cable className="w-6 h-6 text-white" />,
            title: "Structured Cabling",
            text: "Standardized cabling solutions that enhance system reliability, interoperability, and scalability.",
          },
        ]}
      />

      {/* ELV */}
      <SolutionSection
        title="ELV (Extra Low Voltage) Solutions"
        description="Advanced ELV solutions to strengthen safety, communication, and monitoring systems within your organization."
        image={Evn}
        features={[
          {
            icon: <Shield className="w-6 h-6 text-white" />,
            title: "Access Control & Surveillance",
            text: "Ensure safety with reliable access control and modern surveillance systems.",
          },
          {
            icon: <Search className="w-6 h-6 text-white" />,
            title: "System Integration",
            text: "Seamless integration of ELV systems for efficient monitoring and control.",
          },
        ]}
      />
    </div>
  );
};

export default Solutions;
