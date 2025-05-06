import React, { useEffect, useState } from "react";
import classes from "./slider.module.scss";
import { useSwiper } from "swiper/react";
import { Button } from "@shared/ui/Button/Button";

export const SliderNextButton = ({ setIsEnd, isEnd, setIsStart }: { setIsEnd: (isEnd: boolean) => void, isEnd: boolean, setIsStart: (isStart: boolean) => void }) => {
    const swiperInstance = useSwiper();

    const slideNext = () => {   
        swiperInstance.slideNext();
        swiperInstance.update();
        setIsEnd(swiperInstance.isEnd);
        setIsStart(swiperInstance.isBeginning);
    };

    return <Button disabled={isEnd} variant="rounded" styleVariant="shadowed" onClick={slideNext} className={classes.sliderButton__next}>
        <img src={"/assets/icons/arrow-right.svg"} alt="arrow-right" />
    </Button>;
};
