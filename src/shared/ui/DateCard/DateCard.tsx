import React, { useRef, memo } from "react";
import { useDateCardWidth } from "./model/useDateCardWidth";
import classes from "./dateCard.module.scss";

interface DateCardProps {
    year: string;
    text: string;
}

export const DateCard = memo(({ year, text }: DateCardProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerWidth = useDateCardWidth({ text, elementRef: textRef });

  return (
    <div 
      className={classes.dateCard} 
      style={containerWidth ? { width: `${containerWidth}px` } : undefined}
    >
      <p className={classes.dateCard__year}>{year}</p>
      <p ref={textRef} className={classes.dateCard__text}>
        {text}
      </p>
    </div>
  );
});
