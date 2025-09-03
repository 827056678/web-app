export default {
  plugins: {
    "postcss-px-to-viewport-8-plugin": {
      viewportWidth: 375,
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
    },
  },
};
