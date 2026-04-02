import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { useUsers } from "@presentation/hooks/useUser";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";

const AxiosScreen = () => {
  const { theme } = useAppTheme();
  const { users, loading } = useUsers();

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View
      style={[styles.container, { backgroundColor: theme.color.background }]}
    >
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={[theme.typography.h6, { color: theme.color.main }]}>
              {item.name}
            </Text>
            <Text
              style={[theme.typography.body1, { color: theme.color.primary }]}
            >
              {item.email}
            </Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    marginBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    paddingBottom: 8,
  },
});
export default AxiosScreen;
