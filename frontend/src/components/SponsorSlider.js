import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const SponsorSlider = () => {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <div className="bg-gray-100">
      <div className="container flex flex-row justify-center items-center mx-auto  ">
        <div className="flex-1 text-lg font-bold  ml-5 md:ml-10 lg:ml-20 mx-auto  lg:px-10 xl:px-20">
          Trusted by the world's best companies
        </div>
        <div className="flex-1 text-2xl font-bold mb-2 max-w-90 mx-auto px-4 lg:px-10 xl:px-20">
          <img
            src={logo3}
            alt="Sponsor Logo "
            className="max-h-12 mt-2 w-auto object-contain"
          />
        </div>
        {/* <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={logo}
                  alt={`Sponsor Logo ${index + 1}`}
                  className="max-h-16 mt-5 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default SponsorSlider;
