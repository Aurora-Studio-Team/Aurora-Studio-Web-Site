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
    },
  },
},
{
  custom: true
});
