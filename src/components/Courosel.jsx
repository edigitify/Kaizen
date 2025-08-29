import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import images
import Image9 from "../assets/Image/25.png";
import Image11 from "../assets/Image/26.png";
import Image13 from "../assets/Image/27.png";
import Image14 from "../assets/Image/28.png";
import Image15 from "../assets/Image/29.png";
import Image16 from "../assets/Image/30.png";
import Image17 from "../assets/Image/31.png";
import Image18 from "../assets/Image/32.png";
import Image19 from "../assets/Image/33.png";

// Logos array
const logos = [
  { src: Image9, alt: "Clove Dental" },
  { src: Image11, alt: "GD Goenka" },
  { src: Image13, alt: "Narayana" },
  { src: Image14, alt: "CK Birla Hospital" },
  { src: Image15, alt: "Shreya Eye" },
  { src: Image16, alt: "Centre for Sight" },
  { src: Image17, alt: "Image 17" },
  { src: Image18, alt: "Image 18" },
  { src: Image19, alt: "Image 19" },
];

const Courosel = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-red-700">
          Our Partners
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-5xl mx-auto text-center mb-10 px-2">
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          We work closely with some of the world’s leading technology companies
          to bring the latest innovations to our clients. These partnerships
          allow us to design and deliver IT network solutions that are secure,
          scalable, and tailored to specific business needs. By combining global
          expertise with our local experience, we ensure our customers get
          state-of-the-art services that help them stay ahead in a fast-changing
          digital world.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 6, spaceBetween: 40 },
        }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 md:h-28 lg:h-50 max-w-[200px] object-contain transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Courosel;
