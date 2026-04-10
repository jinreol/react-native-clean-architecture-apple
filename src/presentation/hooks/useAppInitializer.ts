import { robotoFonts } from "@core/theme/font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import { createURL } from "expo-linking";
import { LinkingOptions } from "@react-navigation/native";
import { RootTabParamList } from "@presentation/navigation/types";

SplashScreen.preventAutoHideAsync();

export const useAppInitializer = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function initialize() {
      try {
        // 1. 폰트 로드
        await Font.loadAsync(robotoFonts);
      } catch (error) {
        console.warn("Initialization Error:", error);
      } finally {
        setIsReady(true);
      }
    }

    initialize();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  // 2. 팀링크 수정 (Linking Configuration)
  const prefix = createURL("/");
  const linking: LinkingOptions<RootTabParamList> = {
    prefixes: [prefix, "https://app.example.com"], // Expo 스킵과 웹 도메인 모두 허용
    config: {
      screens: {
        News: "news",
        MusicStack: "musicStack",
        // CssStack: "cssStack",
        Axios: "axios",
        Deeplink: {
          path: "page", // https://app.example.com/page?id=123 형태 대응
        },
      },
    },
  };

  return { isReady, onLayoutRootView, linking };
};
