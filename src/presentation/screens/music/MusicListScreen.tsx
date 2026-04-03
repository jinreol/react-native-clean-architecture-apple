import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { View, StyleSheet, Text } from "react-native";

const MusicListScreen = () => {
  const { theme } = useAppTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.color.background }]}
    >
      <Text>뮤직리스트화면</Text>
      <Text>커스텀 테마</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default MusicListScreen;
