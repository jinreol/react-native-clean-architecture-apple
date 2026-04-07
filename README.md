### 프로젝트 절대 경로

- 패키지 설치

```terminal
npx expo install babel-preset-expo
```

- babel.config.js 추가

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./src",
            // 필요한 경로를 여기에 추가하세요.
            "@assets/*": "./src/assets/*",
            "@core/*": "./src/core/*",
            // '@data': './src/data',
            // '@domain': './src/domain',
            // '@presentation': './src/presentation',
            // '@di': './src/di',
          },
        },
      ],
    ],
  };
};
```

- tsconfig.json 수정

```typescript
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@assets/*": ["src/assets/*"],
      "@core/*": ["src/core/*"]
    }
  }
}
```

### 커스텀 폰트 설정

- 패키지 설정

```terminal
npx expo install expo-font expo-splash-screen
```

- 폰트 파일 배치

```
/src/assets/fonts/
  ├── Roboto-Regular.ttf
  ├── Roboto-Bold.ttf
```

- core/theme/font.ts

```typscript
export const robotoFonts = {
  "Roboto-Light": require("@assets/fonts/Roboto-Light.ttf"),
  "Roboto-Medium": require("@assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("@assets/fonts/Roboto-Regular.ttf"),
};
```

### Axios

- 패키지 설정

```terminal
npx expo install axios
```

### SafeArea

- 패키지 설정

```terminal
npx expo install react-native-safe-area-context
```

### Navigation

- 패키지 설정

```terminal
npx expo install @react-navigation/native @react-navigation/bottom-tabs react-native-screens
```

### SVG 사용

- 패키지 설정

```terminal
npx expo install react-native-svg
npm install -D react-native-svg-transformer
```

- Metro 설정 변경 (metro.config.js)

```javascript
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

- TypeScript 사용 시 주의사항 (선택) declarations.d.ts

```typescript
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

### Deeplik

- Deeplink 설정

```tsx
// 2. 팀링크 수정 (Linking Configuration)
const prefix = createURL("/");
const linking: LinkingOptions<RootTabParamList> = {
  prefixes: [prefix, "https://app.example.com"], // Expo 스킵과 웹 도메인 모두 허용
  config: {
    screens: {
      News: "home",
      MusicStack: "musicStack",
      CssStack: "cssStack",
      Axios: "axios",
      Deeplink: {
        path: "page", // https://app.example.com/page?id=123 형태 대응
      },
    },
  },
};
```

- app.json

```json
{
  "expo": {
    "name": "clean-architecture-apple",
    "slug": "clean-architecture-apple",
    "version": "1.0.0",
    "scheme": "myapp", // 여기서 설정한 이름이 myapp:// 형태의 스킴이 됩니다.
    "orientation": "portrait",
    "icon": "./src/assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./src/assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "bundleIdentifier": "com.example.myapp", // Deeplink
      "supportsTablet": true
    },
    "android": {
      "package": "com.example.myapp", // Deeplink
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "predictiveBackGestureEnabled": false
    },
    "web": {
      "favicon": "@assets/favicon.png"
    },
    "plugins": ["expo-font"]
  }
}
```

- Deeplink 받는 부분

```tsx
import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { View, StyleSheet, Text } from "react-native";

const DeeplinkScreen = ({ route }: any) => {
  const { theme } = useAppTheme();
  const { id } = route.params || {};

  return (
    <View
      style={[styles.container, { backgroundColor: theme.color.background }]}
    >
      <Text style={[theme.typography.body1, { color: theme.color.primary }]}>
        Deeplink
      </Text>
      <Text style={[theme.typography.body2, { color: theme.color.secondary }]}>
        ID: {id ? id : "데이터 없음"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default DeeplinkScreen;
```

- ios

```terminal
xcrun simctl openurl booted "exp://127.0.0.1:8081/--/page?id=123"
```

- android

```terminal
adb shell am start -W -a android.intent.action.VIEW -d "exp://127.0.0.1:8081/--/page?id=123"
```
