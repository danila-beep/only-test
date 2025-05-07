export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

export const mediaQuery = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
} as const;


export const getDeviceType = (): DeviceType => {
  if (window.innerWidth <= BREAKPOINTS.mobile) return 'mobile';
  if (window.innerWidth <= BREAKPOINTS.tablet) return 'tablet';
  return 'desktop';
};

export const isMobile = () => getDeviceType() === 'mobile'; 