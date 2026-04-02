import { Text, StyleSheet } from "react-native";
import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { Theme } from "@core/theme/theme";

const NewsTitle = () => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <>
      <Text style={[theme.typography.h5, styles.title]}>Index</Text>
    </>
  );
};

// 스타일 생성 함수 분리
const createStyles = (theme: Theme) =>
  StyleSheet.create({
    title: {
      color: theme.color.main,
      flex: 1,
      marginStart: 16,
      marginTop: 24,
    },
  });

export default NewsTitle;
