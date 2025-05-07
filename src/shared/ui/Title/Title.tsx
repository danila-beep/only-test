import React from "react";
import classes from "./title.module.scss";

export const Title = ({ title, wrap }: { title: string; wrap: boolean }) => {
  const wrappedText = () => {
    return title
      .split(" ")
      .map((word) => (
        <span key={word} className={classes.title__text}>
          {word}
        </span>
      ));
  };
  return (
    <h1 className={classes.title}>
      {wrap ? wrappedText() : <span className={classes.title__text}>{title}</span>}
    </h1>
  );
};
