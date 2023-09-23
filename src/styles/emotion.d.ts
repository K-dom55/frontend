import '@emotion/react';
import { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    gray900: string;
    gray800: string;
    gray700: string;
    gray600: string;
    gray500: string;
    gray400: string;
    gray300: string;
    gray200: string;
    gray100: string;
    gray50: string;
    primaryBlack: string;
    secondaryNeonGreen: string;
    background: string;
    aggro: SerializedStyles;
    headline1: SerializedStyles;
    headline2: SerializedStyles;
    headline3: SerializedStyles;
    body1: SerializedStyles;
    body2: SerializedStyles;
    body3: SerializedStyles;
    body4: SerializedStyles;
    caption1: SerializedStyles;
    caption2: SerializedStyles;
    caption3: SerializedStyles;
  }
}
