import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { useAuth } from "@presentation/hooks/useAuth";
import HomeView from "@presentation/screens/home/components/HomeView";
import LoginView from "@presentation/screens/home/components/LoginView";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const HomeScreen = () => {
  const { theme } = useAppTheme();
  const { user, login, logout } = useAuth();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <HomeView /> : <LoginView />}
    </View>
  );
};

export default HomeScreen;
