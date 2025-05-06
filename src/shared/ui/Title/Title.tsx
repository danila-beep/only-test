import React from "react";
import classes from "./title.module.scss";

export const Title = () => {
    return (
        <h1 className={classes.title}>
            <span className={classes.title__text}>Исторические</span>
            <span className={classes.title__text}>даты</span>
        </h1>
    )
}