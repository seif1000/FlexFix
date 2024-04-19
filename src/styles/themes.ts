import colors from './colors';
import font from './fonts';

const sharedVariants = {
  font,
};

const sharedColors = {
  netflixRed: colors.netflixRed,
  primary: colors.primary,
  primaryLight: colors.primaryLight,
  white: colors.white,
  black: colors.black,
  gray: colors.gray,
  error: colors.red,
  success: colors.green,
};

export const lightTheme = {
  isDark: false,
  colors: {
    ...sharedColors,
    text: colors.fuelTown,
    title: colors.blackOfNight,

    background: colors.white,
    backgroundSecondary: colors.placeboBlue,
    border: colors.easternBreeze,
  },
  ...sharedVariants,
};

export const darkTheme = {
  isDark: true,
  colors: {
    ...sharedColors,
    text: colors.white,
    title: colors.white,

    background: colors.black,
    backgroundSecondary: colors.placeboBlue,
    border: colors.easternBreeze,
  },
  ...sharedVariants,
};

export type AppTheme = typeof lightTheme | typeof darkTheme;
