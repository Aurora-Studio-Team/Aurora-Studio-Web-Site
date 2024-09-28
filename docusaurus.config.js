// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aurora Studio',
  tagline: '创意无界，软件定义未来。',
  favicon: 'img/logo.png',
  // Set the production url of your site here
  url: 'https://aurorastudio.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: '庆祝国庆', // Increment on change
        // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter ${TwitterSvg}</a>`,
        content: `🎉️ <b>热烈庆祝<a target="_blank" href="https://www.gov.cn/">中华人民共和国</a>成立75周年！</b> `,
        backgroundColor: 'red',
        textColor: 'white',
        isCloseable: false,
      },
      navbar: {
        logo: {
          width: '60px',
          alt: 'Logo',
          src: 'img/AuroraStudio.png',
        },
        items: [
          //{
            //type: 'docSidebar',
            //sidebarId: 'tutorialSidebar',
            //position: 'right',
            //label: 'Tutorial',
          //},
          {
            to: '/', 
            label: '首页', 
            position: 'left'
          },
          {
            to: '/apps', 
            label: '产品', 
            position: 'left'
          },
          {
            to: '/docs', 
            label: '文档', 
            position: 'left'
          },
          //{
            //type: 'localeDropdown',
            //position: 'right',
          //},
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Aurora Star Launcher',
                to: '/docs/asl',
              },
              {
                label: 'MPI',
                to: '/docs/mpi',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'iNKORE! (iNKORE Studio)',
                href: 'https://inkore.net',
              },
              {
                label: '墨痕工作室',
                href: 'https://inkmarks.studio',
              },
              {
                label: 'MCSL 开发组',
                href: 'https://mcsl.com.cn/',
              },
              {
                label: 'ZongziTEK',
                href: 'https://zztek.top',
              },
            ],
          },
          {
            title: '社交账户',
            items: [
              {
                label: '哔哩哔哩',
                href: 'https://space.bilibili.com/1910324323',
              },
              {
                label: '微博',
                href: 'https://weibo.com/u/5523554481',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=61559123580368',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@thz6949',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Aurora-Studio-Team',
              },
            ],
          },
        ],
        
        logo: {
          alt: 'Aurora Studio',
          src: 'img/AuroraStudio.png',
          width: 160,
          height: 80,
        },
        copyright: `感谢由 Starcloudsea 提供的 Hero 背景图片，如有侵权请联系 2840519267@qq.com 。<br/>by THZ and other members. <br/> Copyright © 2023-${new Date().getFullYear()} Aurora Studio, All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
