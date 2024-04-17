import {Dimensions, PixelRatio} from 'react-native';

/**
 * Guideline sizes are based on
 * standard ~5" screen mobile device
 */

const {width, height} = Dimensions.get('window');

export const baseWidth = 350;
export const baseHeight = 680;

export const screenWidth = width;
export const screenHeight = height;

export function scale(size: number): number {
  return (width / baseWidth) * size;
}

/**
 * Vertical scale
 */
export function vScale(size: number): number {
  return (height / baseHeight) * size;
}

/**
 * Moderate scale
 */
export function mScale(size: number, factor = 0.1): number {
  return size + (scale(size) - size) * factor;
}

/**
 * Convert pixel to dp
 */
export function toDp(px: number) {
  return px / PixelRatio.get();
}

/**
 * Add opacity to a hex color
 */
export function opacity(hexColor: string, opacityValue: number): string {
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacityValue})`;
}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 2000,
  tv: 4000,
} as const;

export default {
  scale,
  vScale,
  mScale,
  toDp,
  opacity,
  screenWidth,
  screenHeight,
  baseWidth,
  baseHeight,
  breakpoints,
};
