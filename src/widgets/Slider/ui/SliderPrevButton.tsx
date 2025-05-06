import React, { useState } from "react";
import classes from "./slider.module.scss";
import { useSwiper } from "swiper/react";
import { Button } from "@shared/ui/Button/Button";

export const SliderPrevButton = ({ isStart, setIsStart, setIsEnd }: { isStart: boolean, setIsStart: (isStart: boolean) => void, setIsEnd: (isEnd: boolean) => void }) => {
  const swiperInstance = useSwiper();

  const slidePrev = () => {
    swiperInstance.slidePrev();
    swiperInstance.update();
    setIsStart(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);
  };

  return (
    <Button disabled={isStart} variant="rounded" styleVariant="shadowed" onClick={slidePrev} className={classes.sliderButton__prev}>
      <img src={"/assets/icons/arrow-left.svg"} alt="arrow-left" />
    </Button>
  );
};
