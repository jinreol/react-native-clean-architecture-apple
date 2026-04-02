import { DIProvider } from "@di/DIContext";
import { useAppInitializer } from "@presentation/hooks/useAppInitializer";
import { TabNavigator } from "@presentation/navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const { isReady, onLayoutRootView } = useAppInitializer();

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <DIProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </DIProvider>
    </SafeAreaProvider>
  );
};

export default App;
