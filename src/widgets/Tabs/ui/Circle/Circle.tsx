import React from "react";
import classes from "./circle.module.scss"; 
import { Timeline } from "@shared/types/timeline";

type ActivePosition = "top" | "right" | "bottom" | "left";

interface CircleProps {
  setActiveTabHadler: (index: number) => void;
  currentActiveTabIndex: number;
  data: Timeline;
  activePosition?: ActivePosition;
}

export const Circle = ({
  setActiveTabHadler,
  currentActiveTabIndex,
  data,
}: CircleProps) => {
  const circleClass = `${classes.onCircle} ${
    classes[`onCircle--items-${data.length}`]
  }`;

  const handleItemClick = (index: number) => {
    setActiveTabHadler(index);
  };

  const getCircleRotation = () => {
    const baseRotation = 300;
    const itemRotation = -currentActiveTabIndex * (360 / data.length);
    return itemRotation + baseRotation;
  };

  const getItemRotation = (index: number) => {
    return index * (360 / data.length);
  };

  const circleRotation = getCircleRotation();

  return (
    <div
      className={circleClass}
      data-circles-count={Number(data.length)}
      style={{
        transform: `rotate(${circleRotation}deg)`,
        transition: "transform 0.6s ease-in-out",
      }}
    >
      {data.map((item) => {
        const itemRotation = getItemRotation(Number(item.id));
        const contentRotation = -itemRotation - circleRotation;

        return (
          <div
            key={item.id}
            data-index={item.id}
            className={`${classes.onCircle__item} ${
              currentActiveTabIndex === Number(item.id) ? classes.active : ""
            }`}
            onClick={(e) =>
              handleItemClick(Number(e.currentTarget.dataset.index))
            }
            style={{
              transform: `rotate(${itemRotation}deg) translate(${classes.circleRadius})`,
            }}
          >
            <span
              className={classes.item__id}
              style={{
                transform: `rotate(${contentRotation}deg)`,
                transition: "transform 0.6s ease-in-out",
              }}
            >
              {item.id}
            </span>
            <span className={classes.item__category}>{item.category}</span>
          </div>
        );
      })}
    </div>
  );
};
