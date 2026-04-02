import { TextStyle } from "react-native";

export const robotoFonts = {
  "Roboto-Light": require("@assets/fonts/Roboto-Light.ttf"),
  "Roboto-Medium": require("@assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("@assets/fonts/Roboto-Regular.ttf"),
};

export interface ThemeTextStyle {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  button: TextStyle;
  subtitle2: TextStyle;
  caption: TextStyle;
  overline: TextStyle;
}

const FontFamily = {
  light: "Roboto-Light",
  regular: "Roboto-Regular",
  medium: "Roboto-Medium",
};

export const textStyle: ThemeTextStyle = {
  h1: { fontSize: 96, fontFamily: FontFamily.light, letterSpacing: -1.5 },
  h2: { fontSize: 60, fontFamily: FontFamily.light, letterSpacing: 0 },
  h3: { fontSize: 48, fontFamily: FontFamily.regular, letterSpacing: 0 },
  h4: { fontSize: 34, fontFamily: FontFamily.regular, letterSpacing: 0.25 },
  h5: { fontSize: 24, fontFamily: FontFamily.regular, letterSpacing: 0 },
  h6: { fontSize: 20, fontFamily: FontFamily.medium, letterSpacing: 0.15 },
  body1: { fontSize: 16, fontFamily: FontFamily.regular, letterSpacing: 0.44 },
  body2: { fontSize: 14, fontFamily: FontFamily.regular, letterSpacing: 0.25 },
  subtitle2: {
    fontSize: 14,
    fontFamily: FontFamily.medium,
    letterSpacing: 0.1,
  },
  button: {
    fontSize: 14,
    fontFamily: FontFamily.medium,
    letterSpacing: 0.75,
    textTransform: "uppercase",
  },
  caption: { fontSize: 12, fontFamily: FontFamily.regular, letterSpacing: 0.2 },
  overline: {
    fontSize: 10,
    fontFamily: FontFamily.medium,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
};

// 타이포그래피 타입 정의
// export type TypographyVariant =
//   | "h1"
//   | "h2"
//   | "h3"
//   | "h4"
//   | "h5"
//   | "h6"
//   | "body1"
//   | "body2"
//   | "subtitle2"
//   | "button"
//   | "caption"
//   | "overline";

// export const Typography: Record<TypographyVariant, TextStyle> = {
//   h1: { fontSize: 96, fontFamily: FontFamily.light, letterSpacing: -1.5 },
//   h2: { fontSize: 60, fontFamily: FontFamily.light, letterSpacing: 0 },
//   h3: { fontSize: 48, fontFamily: FontFamily.regular, letterSpacing: 0 },
//   h4: { fontSize: 34, fontFamily: FontFamily.regular, letterSpacing: 0.25 },
//   h5: { fontSize: 24, fontFamily: FontFamily.regular, letterSpacing: 0 },
//   h6: { fontSize: 20, fontFamily: FontFamily.medium, letterSpacing: 0.15 },
//   body1: { fontSize: 16, fontFamily: FontFamily.regular, letterSpacing: 0.44 },
//   body2: { fontSize: 14, fontFamily: FontFamily.regular, letterSpacing: 0.25 },
//   subtitle2: {
//     fontSize: 14,
//     fontFamily: FontFamily.medium,
//     letterSpacing: 0.1,
//   },
//   button: {
//     fontSize: 14,
//     fontFamily: FontFamily.medium,
//     letterSpacing: 0.75,
//     textTransform: "uppercase",
//   },
//   caption: { fontSize: 12, fontFamily: FontFamily.regular, letterSpacing: 0.2 },
//   overline: {
//     fontSize: 10,
//     fontFamily: FontFamily.medium,
//     letterSpacing: 1.5,
//     textTransform: "uppercase",
//   },
// };

// export const Font: { font: TypographyVariant } = {
//   h1: { fontSize: 96, fontFamily: FontFamily.light, letterSpacing: -1.5 },
// };

//
/*
// 라이트 모드와 다크 모드에 대한 색상 정의
export const Colors: { light: ThemeColors; dark: ThemeColors } = {
  light: {
    background: "#FFFFFF",
    main: "#263238",
    accent: "#E74C3C",
    primary: "#2980B9",
    secondary: "#2ECC71",
    tertiary: "#FFBB12",
    icon: "#979797",
    shade: "#F0F0F0",
  },
  dark: {
    background: "#121212",
    main: "#E0E0E0",
    accent: "#F47265",
    primary: "#4FB8FF",
    secondary: "#89ED5B",
    tertiary: "#FFD76F",
    icon: "#888888",
    shade: "#272727",
  },
};
*/
