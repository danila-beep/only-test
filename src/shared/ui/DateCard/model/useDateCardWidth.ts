import { useState, useEffect, useCallback } from "react";
import { SIZES } from "@shared/constants/sizes";
import { useMediaQuery } from "@shared/lib/hooks/useMediaQuery";
import {
  measureTextWidth,
  cleanupMeasureElement,
} from "@shared/lib/dom/measureText";

interface UseDateCardWidthProps {
  text: string;
  elementRef: React.RefObject<HTMLElement>;
}

/**
 * Получает размеры для текущего типа устройства с фоллбэком на desktop
 */
const getSizesByDeviceType = (deviceType: string | undefined) => {
  if (!deviceType || !(deviceType in SIZES.dateCard)) {
    return SIZES.dateCard.desktop;
  }
  return SIZES.dateCard[deviceType as keyof typeof SIZES.dateCard];
};

/**
 * Хук для расчета оптимальной ширины карточки даты на основе содержимого
 */
export const useDateCardWidth = ({
  text,
  elementRef,
}: UseDateCardWidthProps) => {
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const { deviceType } = useMediaQuery();

  const calculateWidth = useCallback(async () => {
    const element = elementRef.current;
    if (!element) return;

    try {
      const sizes = getSizesByDeviceType(deviceType);
      const maxHeight = sizes.lineHeight * sizes.maxLines;

      const computedStyle = getComputedStyle(element);
      const width = await measureTextWidth({
        text,
        fontFamily: computedStyle.fontFamily,
        fontSize: `${sizes.fontSize}px`,
        lineHeight: `${sizes.lineHeight}px`,
        minWidth: sizes.minWidth,
        maxWidth: sizes.maxWidth,
        maxHeight,
      });

      setContainerWidth(width);
    } catch (error) {
      console.error("Error calculating container width:", error);
      const sizes = getSizesByDeviceType(deviceType);
      setContainerWidth(sizes.minWidth);
    }
  }, [text, deviceType, elementRef]);

  useEffect(() => {
    calculateWidth();
  }, [calculateWidth]);

  useEffect(() => {
    return () => {
      cleanupMeasureElement();
    };
  }, []);

  return containerWidth;
};
