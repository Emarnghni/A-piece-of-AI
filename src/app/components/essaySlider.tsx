"use client";
import essay from "/public/Images/Essay banner.jpeg";
import Essay from "./essay";
import Slider from "./slider";
import { SwiperSlide } from "swiper/react";

export default function EssaySlider() {
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
      spaceBetween: 20,
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
    <Slider Delay={3000} breakpoints={breakpoints}>
      <SwiperSlide>
        <Essay
          date="۲۲ اردیبهشت ۱۴۰۳"
          description="با هوش مصنوعی بلاک‌چین را شکست دهید"
          src={essay}
          title="با هوش مصنوعی بلاک‌چین را شکست دهید"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Essay
          date="۲۲ اردیبهشت ۱۴۰۳"
          description="با هوش مصنوعی بلاک‌چین را شکست دهید"
          src={essay}
          title="با هوش مصنوعی بلاک‌چین را شکست دهید"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Essay
          date="۲۲ اردیبهشت ۱۴۰۳"
          description="با هوش مصنوعی بلاک‌چین را شکست دهید"
          src={essay}
          title="با هوش مصنوعی بلاک‌چین را شکست دهید"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Essay
          date="۲۲ اردیبهشت ۱۴۰۳"
          description="با هوش مصنوعی بلاک‌چین را شکست دهید"
          src={essay}
          title="با هوش مصنوعی بلاک‌چین را شکست دهید"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Essay
          date="۲۲ اردیبهشت ۱۴۰۳"
          description="با هوش مصنوعی بلاک‌چین را شکست دهید"
          src={essay}
          title="با هوش مصنوعی بلاک‌چین را شکست دهید"
        />
      </SwiperSlide>
    </Slider>
  );
}
