import { Colors, ThemeColors } from "@core/theme/color";
import { textStyle } from "@core/theme/font";
import { Theme } from "@core/theme/theme";
import { useColorScheme } from "react-native";

export const useAppTheme = () => {
  // 시스템 설정을 가져옴 (null 또는 undefined일 수 있음)
  const systemColorScheme = useColorScheme();

  console.log(`systemColorScheme:${systemColorScheme}`);

  // null 또는 undefined인 경우 기본값으로 'light' 사용
  const colorScheme = systemColorScheme ?? "light";

  const isDarkMode = colorScheme === "dark";

  // 현재 모드에 맞는 테마 객체 선택
  const colors: ThemeColors = isDarkMode ? Colors.dark : Colors.light;
  const theme: Theme = { color: colors, typography: textStyle };

  return {
    theme,
    isDarkMode,
    colorScheme, // 'light' 또는 'dark' 반환
  };
};
