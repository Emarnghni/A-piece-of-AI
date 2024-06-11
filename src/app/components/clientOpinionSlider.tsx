"use client";
import { SwiperSlide } from "swiper/react";
import ClientOpinionBox from "./clientOpinionBox";
import Pulse from "./pulse";
import Slider from "./slider";
import TxtArow from "./txtArow";

export default function ClientOpinionSlider() {
  const breakpoints = {
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    // when window width is >= 1330px
    1330: {
      slidesPerView: 4,
      spaceBetween: 55,
    },
  };
  return (
    <>
      <div className="mb-4 flex items-center gap-x-4 lg:mr-auto lg:w-[95.6%]">
        <Pulse className="block" />
        <TxtArow isPulse={false} title="نظرات مشتریان" />
      </div>
      <Slider Delay={3500} breakpoints={breakpoints}>
        <SwiperSlide>
          <ClientOpinionBox />
        </SwiperSlide>
        <SwiperSlide>
          <ClientOpinionBox />
        </SwiperSlide>
        <SwiperSlide>
          <ClientOpinionBox />
        </SwiperSlide>
        <SwiperSlide>
          <ClientOpinionBox />
        </SwiperSlide>
        <SwiperSlide>
          <ClientOpinionBox />
        </SwiperSlide>
      </Slider>
    </>
  );
}
