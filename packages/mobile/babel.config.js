module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          routes: './src/routes',
          components: './src/components',
          utils: './src/utils',
          theme: './src/theme',
          assets: './src/assets',
          icons: './src/assets/icons',
        },
      },
    ],
  ],
};
