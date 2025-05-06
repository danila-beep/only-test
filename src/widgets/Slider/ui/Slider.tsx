import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { DateCard } from "@shared/ui/DateCard/DateCard";
import { SliderNextButton } from "./SliderNextButton";
import { SliderPrevButton } from "./SliderPrevButton";

import classes from "./slider.module.scss";
import "swiper/css";

export const Slider = () => {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Swiper
      className={classes.slider}
      slidesPerView={3}
      spaceBetween={80}
      onReachEnd={() => {
        setIsEnd(true)
        setIsStart(false)
      }}
      onReachBeginning={() => {
        setIsStart(true)
        setIsEnd(false)
      }}
    >
      <div className={classes.slider__controls}>
        <div className={classes.slider__controls__buttons}>
          <SliderPrevButton
            setIsStart={setIsStart}
            setIsEnd={setIsEnd}
            isStart={isStart}
          />
          <SliderNextButton
            setIsEnd={setIsEnd}
            isEnd={isEnd}
            setIsStart={setIsStart}
          />
        </div>
      </div>
      <SwiperSlide className={classes.slider__slide}>
        <DateCard
          year="2015"
          text="13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.slider__slide}>
        <DateCard
          year="2015"
          text="13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.slider__slide}>
        <DateCard
          year="2015"
          text="13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.slider__slide}>
        <DateCard
          year="2015"
          text="13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
        />
      </SwiperSlide>
    </Swiper>
  );
};
