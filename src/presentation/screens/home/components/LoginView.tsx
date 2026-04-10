import { UserData } from "@presentation/entities/UserData";
import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { useAuth } from "@presentation/hooks/useAuth";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const LoginView = () => {
  const { theme } = useAppTheme();
  const { user, login, logout } = useAuth();
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim()) {
      // 가상의 API 응답 데이터 수신 시뮬레이션
      const mockUserData: UserData = {
        id: "user_123",
        name: name,
        email: `${name.toLocaleLowerCase()}@example.com}`,
        points: 5000,
      };
      login(mockUserData);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <Text
          style={[
            theme.typography.h5,
            {
              color: theme.color.main,
            },
          ]}
        >
          Typecript 로그인
        </Text>
        <TextInput
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: theme.color.shade,
            color: theme.color.main,
            padding: 15,
            marginTop: 16,
            marginBottom: 20,
            borderRadius: 10,
            backgroundColor: theme.color.background,
          }}
          placeholder="이름을 입력하세요."
          value={name}
          onChangeText={setName}
        />
        <Button title="로그인" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginView;
