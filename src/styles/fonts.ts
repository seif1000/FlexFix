import {TextStyle} from 'react-native';

import {mScale} from './mixins';

const fontSize = {
  xs: mScale(11),
  sm: mScale(12),
  base: mScale(14),
  base2: mScale(16),
  lg: mScale(18),
  xl: mScale(24),
  xl2: mScale(28),
  xl3: mScale(32),
  xl4: mScale(48),
  xl5: mScale(56),
  xl6: mScale(64),
};

const fontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

const fontFamily = {
  default: 'Inter',
};

type FontSize = keyof typeof fontSize;
type FontWeight = keyof typeof fontWeight;
type FontFamily = keyof typeof fontFamily;

type Font = Record<FontSize, number> &
  Record<FontFamily, string> &
  Record<FontWeight, Exclude<TextStyle['fontWeight'], 'normal' | undefined>>;

export default {
  ...fontSize,
  ...fontWeight,
  ...fontFamily,
} as Font;
