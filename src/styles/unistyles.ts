import {UnistylesRegistry} from 'react-native-unistyles';

import {lightTheme, darkTheme} from './themes';
import {breakpoints} from './mixins';

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
})
  .addBreakpoints(breakpoints)
  .addConfig({
    adaptiveThemes: true,
  });
