import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Aurora Studio",
      description: "Unleash your creativity,software shapes the future.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Aurora Studio",
      description: "Unleash your creativity,software shapes the future.",
    },
  },

  head: [
    
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
