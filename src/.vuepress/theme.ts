import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://aurora.thzstudent.top",

  author: {
    name: "Admin-THZ",
    url: "https://thzstudent.top",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/img/logo.png",

  repo: "Aurora-Studio-Team/Aurora-Studio-Web-Site",

  docsDir: "src",

  locales: {
    "/": {
      logo: "/logo.svg",
      navbar: [
        { text: "Home", link: "/"},
        { text: "Apps", link: "/apps/index.md"},
        { text: "Links", link: "/links/index.md"},
        { text: "About", link: "/about/index.md"},
      ],
      sidebar: [
        {
          text: "Apps",
          link: "/apps/",
          prefix: "/apps",
          children: [
            {
              text: "Aurora Star Laucnher",
              prefix: "/apps/asl",
              collapsible: true,
              children: [
                {
                  text: "Guide",
                  link: "/apps/asl/guide/",
                },
                {
                  text: "Install App",
                  link: "/apps/asl/install-app/",
                }
              ],
            },
            {
              text: "Minecraft Manager API",
              prefix: "/apps/mmapi",
              collapsible: true,
              children: [
                {
                  text: "Guide",
                  link: "/apps/oasismcapi/guide/",
                }
              ],
            }
          ],
        },
      ],
    },
    "/zh/": {
      logo: "/zh-logo.svg",
      navbar: [
        { text: "首页", link: "/zh/"},
        { text: "产品", link: "/zh/apps/"},
        { text: "友链", link: "/zh/links/index.md"},
        { text: "关于", link: "/zh/about/index.md"},
      ],
      sidebar: [
        {
          text: "产品",
          link: "/zh/apps/",
          prefix: "/zh/apps",
          children: [
            {
              text: "Aurora Star Laucnher",
              prefix: "/zh/apps/asl",
              collapsible: true,
              children: [
                {
                  text: "介绍",
                  link: "/zh/apps/asl/guide/",
                },
                {
                  text: "安装软件",
                  link: "/zh/apps/asl/install-app/",
                }
              ],
            },
            {
              text: "Minecarft Manager API",
              prefix: "/zh/apps/oasismcapi",
              collapsible: true,
              children: [
                {
                  text: "介绍",
                  link: "/zh/apps/mmapi/guide/",
                }
              ],
            }
          ],
        },
      ],
    },
  },
  
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // Install chart.js before enabling it
      // chart: true,

      // insert component easily

      // Install echarts before enabling it
      // echarts: true,

      // Install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // Install katex before enabling it
      // katex: true,

      // Install mathjax-full before enabling it
      // mathjax: true,

      // Install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // Install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // Install @vue/repl before enabling it
      // vuePlayground: true,

      // Install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
