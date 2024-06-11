"use client";
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { FC, ReactNode } from "react";
import { SwiperOptions } from "swiper/types";
interface Props {
  children: ReactNode;
  breakpoints: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  Delay?: number | undefined;
}
const Slider: FC<Props> = ({ children, breakpoints, Delay }) => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        breakpoints={breakpoints}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: Delay,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        {children}
      </Swiper>
    </>
  );
};
export default Slider;
