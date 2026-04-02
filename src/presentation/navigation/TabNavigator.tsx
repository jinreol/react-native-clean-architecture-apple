import { useAppTheme } from "@presentation/hooks/useAppTheme";
import CssStack from "@presentation/navigation/CssStack";
import { RootTabParamList } from "@presentation/navigation/types";
import AxiosScreen from "@presentation/screens/AxiosScreen";
import SettingsScreen from "@presentation/screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
  const { theme } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.color.background },
        tabBarActiveTintColor: theme.color.accent,
        headerStyle: { backgroundColor: theme.color.background },
        headerTitleStyle: { color: theme.color.main },
      }}
    >
      <Tab.Screen
        name="CssStack"
        component={CssStack}
        options={{ title: "Css", headerShown: false }}
      />
      <Tab.Screen name="Axios" component={AxiosScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
