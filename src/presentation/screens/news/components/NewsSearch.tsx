import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { View, Text, StyleSheet } from "react-native";
import SearchIcon from "@assets/svg/ic_search_24.svg";
import MicIcon from "@assets/svg/ic_mic_24.svg";
import { Theme } from "@core/theme/theme";

const NewsSearch = () => {
  const { theme } = useAppTheme();
  // 테마를 인자로 전달하여 스타일 객체 생성
  const styles = createStyles(theme);

  return (
    <>
      <View style={styles.container}>
        <SearchIcon width={24} height={24} style={styles.searchIcon} />
        <Text style={[theme.typography.h6, styles.searchText]}>Search</Text>
        <MicIcon width={24} height={24} style={styles.micIcon} />
      </View>
    </>
  );
};

// 스타일 생성 함수 분리
const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 48,
      marginTop: 8,
      marginHorizontal: 8,
      backgroundColor: theme.color.shade,
      borderRadius: 3,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    searchIcon: {
      marginStart: 12,
    },
    searchText: {
      color: theme.color.main,
      flex: 1,
      marginStart: 24,
    },
    micIcon: {
      marginEnd: 12,
    },
  });

export default NewsSearch;
