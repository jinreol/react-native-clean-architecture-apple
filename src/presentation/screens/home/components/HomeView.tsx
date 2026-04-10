import { useAuth } from "@presentation/hooks/useAuth";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeView = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 홈 화면</Text>
      <View style={styles.card}>
        <Text>이름: {user?.name}</Text>
        <Text>이메일: {user?.email}</Text>
        <Text>고유 ID: {user?.id}</Text>
      </View>
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={{ color: "white", fontWeight: "bold" }}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
};

/** 스타일 (Styles) **/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 30, color: "#333" },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  infoText: { fontSize: 18, marginBottom: 10 },
  bold: { fontWeight: "bold", color: "#007AFF" },
  card: {
    padding: 25,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    width: "100%",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoutBtn: {
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
});

export default HomeView;
