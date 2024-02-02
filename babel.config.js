module.exports = {
  presets: ['module:@react-native/babel-preset', 'babel-preset-expo'],
  plugins: [
    'babel-preset-expo',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
