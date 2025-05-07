import React, { useState, useEffect, useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { TimelineEvent } from "@shared/types/timeline";
import { FreeMode } from "swiper/modules";
import { Button } from "@shared/ui/Button/Button";
import gsap from "gsap";

import classes from "./slider.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import { DateCard } from "@shared/ui/DateCard/DateCard";

export const Slider = ({ data }: { data: TimelineEvent[] }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevDataRef = useRef<TimelineEvent[]>(data);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const dataString = useMemo(() => JSON.stringify(data), [data]);
  const prevDataString = useRef(dataString);

  useEffect(() => { 
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || isAnimating) return;

    if (prevDataString.current !== dataString) {
      setIsAnimating(true);
      const slides = containerRef.current.querySelectorAll('.swiper-slide');
      
      const timeline = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          prevDataRef.current = data;
          prevDataString.current = dataString;
        }
      });

      timeline.to(slides, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.inOut",
        onComplete: () => {
          swiper?.update();
        }
      });

      timeline.fromTo(
        slides,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.1
        }
      );
    }

    swiper?.update();
  }, [dataString, isAnimating, swiper, data, isMobile]);

  const handleSlideChange = () => {
    if (!swiper || isAnimating) return;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveIndex(swiper.activeIndex);
  };

  const handlePrev = () => {
    if (!isAnimating) {
      swiper?.slidePrev();
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      swiper?.slideNext();
    }
  };

  return (
    <div className={classes.slider_container} ref={containerRef}>
      <Swiper
        className={classes.slider}
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={isMobile ? 25 : 80}
        freeMode={{
          enabled: true,
          sticky: false,
        }}
        watchSlidesProgress={true}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        onReachBeginning={() => !isAnimating && setIsBeginning(true)}
        onReachEnd={() => !isAnimating && setIsEnd(true)}
        onFromEdge={() => {
          if (!isAnimating) {
            setIsBeginning(false);
            setIsEnd(false);
          }
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide 
            key={`${item.date.getTime()}-${index}`}
            className={classes.slider__slide}
          >
            <DateCard
              year={item.date.getFullYear().toString()}
              text={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={classes.slider__controls}>
        <div className={classes.slider__controls__buttons}>
          <Button
            variant="rounded"
            styleVariant="shadowed"
            onClick={handlePrev}
            disabled={isBeginning || isAnimating}
          >
            <img src={"/assets/icons/arrow-left.svg"} alt="arrow-left" />
          </Button>
          <Button
            variant="rounded"
            styleVariant="shadowed"
            onClick={handleNext}
            disabled={isEnd || isAnimating}
          >
            <img src={"/assets/icons/arrow-right.svg"} alt="arrow-right" />
          </Button>
        </div>
        {
          isMobile && (
            <div className={classes.slider__controls__pagination}>
                {Array.from({length: data.length}, (_, index) => (
                  <span key={index} className={index === activeIndex ? classes.active : ""}></span>
                ))}
            </div>
          )
        }
      </div>
    </div>
  );
};
