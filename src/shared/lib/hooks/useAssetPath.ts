export const useAssetPath = (path: string): string => {
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? `.${path}` : path;
}; 