import { useAppTheme } from "@presentation/hooks/useAppTheme";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MusicListScreen = () => {
  const { theme } = useAppTheme();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.color.background,
          paddingTop: insets.top,
        },
      ]}
    >
      <Image
        style={{
          width: width,
          height: (width / 360) * 296,
          // aspectRatio를 쓰면 안된다. 알 수 없는 빈공간이 생긴다.
        }}
        source={require("@assets/png/music_detail.png")}
        // cover: 비율을 유지하면서 영역을 꽉 채움 (잘릴 수 있음)
        // contain: 비율을 유지하면서 전체가 보이게 함
        // stretch: 비율울 무시하고 영역에 딱 맞게 늘림 (비율 깨짐 주의)
        resizeMode="stretch"
      />
      <Text>뮤직리스트화면</Text>
      <Text>커스텀 테마</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MusicListScreen;
