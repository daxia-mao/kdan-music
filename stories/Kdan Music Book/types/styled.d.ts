import { ThemeType } from "../theme";
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

