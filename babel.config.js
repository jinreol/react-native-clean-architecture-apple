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
            // "@": "./src",
            // 필요한 경로를 여기에 추가하세요.
            "@assets/*": "./src/assets/*",
            "@core/*": "./src/core/*",
            "@data": "./src/data",
            "@di": "./src/di",
            "@domain": "./src/domain",
            "@presentation/*": "./src/presentation/*",
          },
        },
      ],
    ],
  };
};
