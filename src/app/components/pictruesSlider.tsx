"use client";
import { SwiperSlide } from "swiper/react";
import Slider from "./slider";
import Image from "next/image";
import iranserver from "/public/SVG/iranserver.svg";
import snap from "/public/SVG/snapp.svg";
export default function PictruesSlider() {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      width: 320,
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 5,
      spaceBetween: 15,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 7,
      spaceBetween: 25,
    },
    // when window width is >= 1330px
    1330: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
  };
  const pictures = [
    iranserver,
    snap,
    iranserver,
    snap,
    iranserver,
    snap,
    iranserver,
    snap,
  ];
  return (
    <Slider Delay={3000} breakpoints={breakpoints}>
      {pictures.map((item, index) => (
        <SwiperSlide>
          <Image className="lg:w-[75px]" key={index} src={item} alt="company" />
        </SwiperSlide>
      ))}
    </Slider>
  );
}
