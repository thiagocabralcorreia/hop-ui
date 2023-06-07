export interface IHopTheme {
  borders: {
    sm: string;
    md: string;
  };
  borderRadius: {
    sm: string;
    md: string;
  };
  borderStyles: {
    solid: string;
  };
  borderWidths: {
    sm: string;
    md: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  colors: {
    primary: string;
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;
    secondary: string;
    secondary100: string;
    secondary200: string;
    secondary300: string;
    secondary400: string;
    secondary500: string;
    tertiary: string;
    tertiary100: string;
    tertiary200: string;
    tertiary300: string;
    tertiary400: string;
    tertiary500: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;
    black: string;
    white: string;
  };
  components: Record<string, unknown>;
  fontFamily: string[];
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  fontWeights: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  iconSizes: {
    sm: string;
    md: string;
    lg: string;
  };
  lineHeights: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  rtl: boolean;
  shadowWidths: {
    xs: string;
    sm: string;
    md: string;
  };
  shadows: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  space: {
    base: number;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}
