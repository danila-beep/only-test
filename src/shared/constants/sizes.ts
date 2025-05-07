type DeviceType = 'mobile' | 'tablet' | 'desktop';

interface CardSize {
  minWidth: number;
  maxWidth: number;
  lineHeight: number;
  fontSize: number;
  maxLines: number;
  gap: number;
}

type DateCardSizes = {
  [key in DeviceType]: CardSize;
};

export const SIZES = {
  dateCard: {
    desktop: {
      minWidth: 200,
      maxWidth: 400,
      lineHeight: 30,
      fontSize: 20,
      maxLines: 3,
      gap: 15,
    },
    tablet: {
      minWidth: 175,
      maxWidth: 350,
      lineHeight: 25,
      fontSize: 16,
      maxLines: 3,
      gap: 15,
    },
    mobile: {
      minWidth: 150,
      maxWidth: 300,
      lineHeight: 20,
      fontSize: 14,
      maxLines: 4,
      gap: 15,
    },
  },
} as const satisfies { dateCard: DateCardSizes }; 