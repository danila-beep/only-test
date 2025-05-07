import React, { useRef, useEffect, useState } from "react";
import classes from "./dateCard.module.scss";

interface DateCardProps {
    year: string;
    text: string;
}

export const DateCard = ({ year, text }: DateCardProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

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
    const element = textRef.current;
    if (!element) return;

    const temp = document.createElement('p');
    temp.style.cssText = `
      position: absolute;
      visibility: hidden;
      font-family: ${getComputedStyle(element).fontFamily};
      font-size: ${getComputedStyle(element).fontSize};
      line-height: ${getComputedStyle(element).lineHeight};
      width: 200px;
      white-space: pre-wrap;
      margin: 0;
      padding: 0;
    `;
    temp.textContent = text;
    document.body.appendChild(temp);

    const heightAt200px = temp.offsetHeight;

    if (heightAt200px > 90) {
      let width = 200;
      const increment = 10;
      
      while (width <= 400) {
        temp.style.width = `${width}px`;
        if (temp.offsetHeight <= 90) {
          setContainerWidth(width);
          break;
        }
        width += increment;
      }
    }

    document.body.removeChild(temp);
  }, [text, isMobile]);

  return (
    <div 
      className={classes.dateCard} 
      style={containerWidth ? { width: `${containerWidth}px` } : undefined}
    >
      <p className={classes.dateCard__year}>{year}</p>
      <p 
        ref={textRef} 
        className={classes.dateCard__text}
      >
        {text}
      </p>
    </div>
  );
};
