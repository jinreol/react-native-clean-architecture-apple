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
