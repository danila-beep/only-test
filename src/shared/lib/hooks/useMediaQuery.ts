import { useState, useEffect, useMemo } from "react";
import {
  BREAKPOINTS,
  getDeviceType,
  type DeviceType,
} from "@shared/config/media";

const RESIZE_THROTTLE = 100;

const createMediaQueries = () => {
  const mobile = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile}px)`);
  const tablet = window.matchMedia(
    `(min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${
      BREAKPOINTS.tablet
    }px)`
  );
  return { mobile, tablet } as const;
};

/**
 * Хук для отслеживания текущего типа устройства на основе ширины экрана
 * @returns Объект с информацией о текущем типе устройства
 */
export const useMediaQuery = () => {
  const mediaQueries = useMemo(createMediaQueries, []);
  const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType());

  useEffect(() => {
    const updateDeviceType = () => {
      if (mediaQueries.mobile.matches) {
        setDeviceType("mobile");
      } else if (mediaQueries.tablet.matches) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    mediaQueries.mobile.addEventListener("change", updateDeviceType);
    mediaQueries.tablet.addEventListener("change", updateDeviceType);

    updateDeviceType();

    return () => {
      mediaQueries.mobile.removeEventListener("change", updateDeviceType);
      mediaQueries.tablet.removeEventListener("change", updateDeviceType);
    };
  }, [mediaQueries]);

  return {
    deviceType,
    isMobile: deviceType === "mobile",
    isTablet: deviceType === "tablet",
    isDesktop: deviceType === "desktop",
  } as const;
};
