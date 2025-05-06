import React from "react";
import classes from "./dateCard.module.scss";

interface DateCardProps {
    year: string;
    text: string;
}

export const DateCard = ({ year, text }: DateCardProps) => {
  return (
    <div className={classes.dateCard}>
      <p className={classes.dateCard__year}>{year}</p>
      <p className={classes.dateCard__text}>{text}</p>
    </div>
  );
};
