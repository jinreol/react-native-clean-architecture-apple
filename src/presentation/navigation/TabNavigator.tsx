import { useAppTheme } from "@presentation/hooks/useAppTheme";
import CssStack from "@presentation/navigation/CssStack";
import MusicStack from "@presentation/navigation/MusicStack";
import { RootTabParamList } from "@presentation/navigation/types";
import AxiosScreen from "@presentation/screens/axios/AxiosScreen";
import NewsScreen from "@presentation/screens/news/NewsScreen";
import DeeplinkScreen from "@presentation/screens/deeplink/DeeplinkScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "@assets/svg/ic_home_24.svg";
import NewsIcon from "@assets/svg/ic_news_24.svg";
import HeartIcon from "@assets/svg/ic_heart_24.svg";
import MusicIcon from "@assets/svg/ic_music_24.svg";
import SettingsIcon from "@assets/svg/ic_settings_24.svg";
import WebIcon from "@assets/svg/ic_web_24.svg";
import WebViewScreen from "@presentation/screens/webview/WebViewScreen";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
  const { theme } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "News") {
            return (
              <NewsIcon color={color} style={{ width: size, height: size }} />
            );
          } else if (route.name === "MusicStack") {
            return (
              <MusicIcon color={color} style={{ width: size, height: size }} />
            );
          } else if (route.name === "CssStack") {
            return (
              <HomeIcon color={color} style={{ width: size, height: size }} />
            );
          } else if (route.name === "Axios") {
            return (
              <HeartIcon color={color} style={{ width: size, height: size }} />
            );
          } else if (route.name === "Deeplink") {
            return (
              <SettingsIcon
                color={color}
                style={{ width: size, height: size }}
              />
            );
          } else if (route.name === "WebView") {
            return (
              <WebIcon color={color} style={{ width: size, height: size }} />
            );
          }
        },
        tabBarStyle: { backgroundColor: theme.color.background },
        tabBarActiveTintColor: theme.color.secondary,
        tabBarInactiveTintColor: theme.color.icon,
        tabBarLabelStyle: theme.typography.caption,
        headerStyle: { backgroundColor: theme.color.background },
        headerTitleStyle: { color: theme.color.main },
      })}
    >
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{ title: "News", headerShown: false }}
      />
      <Tab.Screen
        name="MusicStack"
        component={MusicStack}
        options={{ title: "Music", headerShown: false }}
      />
      <Tab.Screen
        name="CssStack"
        component={CssStack}
        options={{ title: "Css", headerShown: false }}
      />
      <Tab.Screen name="Axios" component={AxiosScreen} />
      <Tab.Screen name="Deeplink" component={DeeplinkScreen} />
      <Tab.Screen name="WebView" component={WebViewScreen} />
    </Tab.Navigator>
  );
};
