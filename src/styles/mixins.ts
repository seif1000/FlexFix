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
 * Moderate scale
 */
export function mScale(size: number, factor = 0.1): number {
  return size + (scale(size) - size) * factor;
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

  mScale,

  screenWidth,
  screenHeight,
  baseWidth,
  baseHeight,
  breakpoints,
};
