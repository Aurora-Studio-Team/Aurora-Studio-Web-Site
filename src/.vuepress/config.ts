import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

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

  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/components/PageFooter": path.resolve(
      __dirname,
      "./components/PageFooter.vue",
    ),
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue",
    ),
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
