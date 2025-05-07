import React, { useEffect, useRef } from "react";
import classes from "./yearCounter.module.scss";
import gsap from "gsap";

export const YearCounter = ({ from, to }: { from: number; to: number }) => {
  const fromRef = useRef<HTMLSpanElement>(null);
  const toRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef({ from: from, to: to });
  
  useEffect(() => {
    if (!fromRef.current || !toRef.current) return;

    gsap.to(counterRef.current, {
      from: from,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => {
        if (fromRef.current) {
          fromRef.current.textContent = Math.round(counterRef.current.from).toString();
        }
      }
    });

    gsap.to(counterRef.current, {
      to: to,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => {
        if (toRef.current) {
          toRef.current.textContent = Math.round(counterRef.current.to).toString();
        }
      }
    });
  }, [from, to]);

  return (
    <div className={classes.yearCounter}>
      <span 
        ref={fromRef}
        className={`${classes.yearCounter__item} ${classes.from}`}
      >
        {from}
      </span>
      <span 
        ref={toRef}
        className={`${classes.yearCounter__item} ${classes.to}`}
      >
        {to}
      </span>
    </div>
  );
};
