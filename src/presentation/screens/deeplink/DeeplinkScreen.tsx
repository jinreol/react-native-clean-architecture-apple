import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { View, StyleSheet, Text } from "react-native";

const DeeplinkScreen = ({ route }: any) => {
  const { theme } = useAppTheme();
  const { id } = route.params || {};

  return (
    <View
      style={[styles.container, { backgroundColor: theme.color.background }]}
    >
      <Text style={[theme.typography.body1, { color: theme.color.primary }]}>
        Deeplink
      </Text>
      <Text style={[theme.typography.body2, { color: theme.color.secondary }]}>
        ID: {id ? id : "데이터 없음"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default DeeplinkScreen;
