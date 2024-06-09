"use client";
import React, { ReactElement, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
  children?: ReactElement;
  className?: string;
}
export const Slider = ({ children, className }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container ${className ?? ""}`}>{children}</div>
      </div>
    </div>
  );
};
