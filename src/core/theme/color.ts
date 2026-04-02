// 테마 색상 인터페이스 정의
export interface ThemeColors {
  background: string;
  main: string;
  accent: string;
  primary: string;
  secondary: string;
  tertiary: string;
  icon: string;
  shade: string;
}

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
