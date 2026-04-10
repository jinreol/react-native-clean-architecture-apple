import { DIProvider } from "@di/DIContext";
import { useAppInitializer } from "@presentation/hooks/useAppInitializer";
import { TabNavigator } from "@presentation/navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";
import { AuthProvider } from "@presentation/hooks/useAuth";

const App = () => {
  const { isReady, onLayoutRootView, linking } = useAppInitializer();

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <DIProvider>
        <AuthProvider>
          <NavigationContainer
            linking={linking}
            fallback={<Text>Loading...</Text>}
          >
            <TabNavigator />
          </NavigationContainer>
        </AuthProvider>
      </DIProvider>
    </SafeAreaProvider>
  );
};

export default App;
