"use client"; // Necessary for Next.js App Router (if using Next.js 13+)

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="/images/s1.jpg"
            alt="Img"
            className="round"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/s2.jpg"
            alt="Img"
            className="round"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/s3.jpg"
            alt="Img"
            className="round"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
