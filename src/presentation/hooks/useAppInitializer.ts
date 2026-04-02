import { robotoFonts } from "@core/theme/font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";

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

  return { isReady, onLayoutRootView };
};
