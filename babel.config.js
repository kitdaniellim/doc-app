module.exports = function(api) {
  api.cache(true);
  return {
    /* DEV: EJA - Added react-native-dotenv for handling of environment variables */
    presets: ['babel-preset-expo', 'module:react-native-dotenv'],
    plugins: [ "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-transform-spread",
      {
        "loose": true
      }
    ] ]
  };
};

