import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ArrowLeft from "@assets/svg/ic_arrow_left_40.svg";
import MoreIcon from "@assets/svg/ic_more_40.svg";
import { Theme } from "@core/theme/theme";

interface MusicListTopAppBarProps {
  title: string;
  artist: string;
  onPressArrowLeft: () => void;
  onPressMore: () => void;
}

const MusicListTopAppBar = ({
  title,
  artist,
  onPressArrowLeft,
  onPressMore,
}: MusicListTopAppBarProps) => {
  const { theme } = useAppTheme();
  // 테마를 인자로 전달하여 스타일 객체 생성
  const styles = createStyles(theme);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressArrowLeft} activeOpacity={0.7}>
          <ArrowLeft width={40} height={40} style={styles.arrowLeftIcon} />
        </TouchableOpacity>
        <Text style={[theme.typography.h6, styles.title]} numberOfLines={1}>
          {title} - {artist}
        </Text>
        <TouchableOpacity onPress={onPressMore} activeOpacity={0.7}>
          <MoreIcon width={40} height={40} style={styles.moreIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
};

// 스타일 생성 함수 분리
const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 56,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    arrowLeftIcon: {
      marginStart: 8,
    },
    title: {
      color: theme.color.background,
      flex: 1,
      marginStart: 16,
    },
    moreIcon: {
      marginEnd: 8,
    },
  });

export default MusicListTopAppBar;
