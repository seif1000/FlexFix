import colors from './colors';
import font from './fonts';

const sharedVariants = {
  font,
};

const sharedColors = {
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
    icon: colors.fuelTown,
    iconActive: colors.blackOfNight,
    background: colors.white,
    backgroundSecondary: colors.placeboBlue,
    border: colors.easternBreeze,
    fuelTown: colors.fuelTown,
    placeboblue: colors.placeboBlue,
    blackOfNight: colors.blackOfNight,
    ashenvaleNights: colors.ashenvaleNights,
    green: colors.green,
  },
  ...sharedVariants,
};

export const darkTheme = {
  isDark: true,
  colors: {
    ...sharedColors,
    text: colors.white,
    title: colors.white,
    icon: colors.white,
    iconActive: colors.black,
    background: colors.black,
    backgroundSecondary: colors.placeboBlue,
    border: colors.easternBreeze,
    fuelTown: colors.fuelTown,
    placeboblue: colors.placeboBlue,
    blackOfNight: colors.blackOfNight,
    ashenvaleNights: colors.ashenvaleNights,
    green: colors.green,
  },
  ...sharedVariants,
};

export type AppTheme = typeof lightTheme | typeof darkTheme;
