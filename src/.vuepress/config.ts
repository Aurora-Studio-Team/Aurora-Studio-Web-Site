import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

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
    // 预连接到字体服务
    ["link", { rel: "preconnect", href: "https://cdn.jsdelivr.net/npm/@callmebill/lxgw-wenkai-web@latest", crossorigin: "anonymous" }],
    // 导入 LXGW Wenkai 字体样式表
    ["link", {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/quicksand@0.0.1/index.min.js"
    }],
  ],

  alias: {
    "@theme-hope/components/PageFooter": path.resolve(
      __dirname,
      "../components/PageFooter.vue",
    ),
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "../components/HomePage.vue",
    ),
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
