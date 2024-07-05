import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  alias: {
    "@theme-hope/components/PageFooter": path.resolve(
      __dirname,
      "./components/PageFooter.vue",
    ),
  },

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
    ["link", { rel: "preconnect", href: "/Fonts", crossorigin: "" }],
    ["link", {
      rel: "stylesheet",
      href: "/Fonts/Quicksand.ttf"
    }],
    ["link", {
      rel: "stylesheet",
      href: "/Fonts/Monaco.ttf"
    }],
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
