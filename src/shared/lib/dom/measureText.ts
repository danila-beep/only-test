const WIDTH_INCREMENT = 10;

let measureElement: HTMLParagraphElement | null = null;

const getMeasureElement = (): HTMLParagraphElement => {
  if (!measureElement) {
    measureElement = document.createElement("p");
    measureElement.style.cssText = `
      position: absolute;
      visibility: hidden;
      margin: 0;
      padding: 0;
    `;
    document.body.appendChild(measureElement);
  }
  return measureElement;
};

export const cleanupMeasureElement = () => {
  if (measureElement) {
    document.body.removeChild(measureElement);
    measureElement = null;
  }
};


interface MeasureTextConfig {
  text: string;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  minWidth: number;
  maxWidth: number;
  maxHeight: number;
}

const measureCache = new Map<string, number>();

const getCacheKey = (config: MeasureTextConfig): string => {
  return JSON.stringify({
    text: config.text,
    fontFamily: config.fontFamily,
    fontSize: config.fontSize,
    lineHeight: config.lineHeight,
    minWidth: config.minWidth,
    maxWidth: config.maxWidth,
    maxHeight: config.maxHeight,
  });
};

/**
 * Измеряет необходимую ширину контейнера для текста с заданными параметрами
 * @param config - Конфигурация для измерения
 * @returns Оптимальная ширина контейнера
 */
export const measureTextWidth = async (
  config: MeasureTextConfig
): Promise<number> => {
  try {
    const cacheKey = getCacheKey(config);
    const cachedResult = measureCache.get(cacheKey);
    if (cachedResult !== undefined) {
      return cachedResult;
    }

    const element = getMeasureElement();
    element.style.fontFamily = config.fontFamily;
    element.style.fontSize = config.fontSize;
    element.style.lineHeight = config.lineHeight;
    element.style.width = `${config.minWidth}px`;
    element.style.whiteSpace = "pre-wrap";
    element.textContent = config.text;

    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.top = "-9999px";

    const heightAtMinWidth = element.offsetHeight;
    let resultWidth = config.minWidth;

    if (heightAtMinWidth > config.maxHeight) {
      let width = config.minWidth;

      const measure = () => {
        element.style.width = `${width}px`;
        const height = element.offsetHeight;

        if (height <= config.maxHeight) {
          resultWidth = width;
          return true;
        }

        width += WIDTH_INCREMENT;
        return width > config.maxWidth;
      };

      const performMeasurements = () => {
        return new Promise<number>((resolve) => {
          requestAnimationFrame(() => {
            while (!measure() && width <= config.maxWidth) {
              // продолжаем измерения
            }
            resolve(resultWidth);
          });
        });
      };

      resultWidth = await performMeasurements();
    }

    measureCache.set(cacheKey, resultWidth);
    return resultWidth;
  } catch (error) {
    console.error("Error measuring text width:", error);
    return config.minWidth;
  }
};
