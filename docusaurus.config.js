// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '九鼎文档中心', // 修改标题为 九鼎文档中心
  tagline: '', // 去除 tagline
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wincao618.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/9tripod-docs/', 

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wincao618', // Usually your GitHub org/user name.
  projectName: '9tripod-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',  // 设置默认语言为简体中文
    locales: ['zh-Hans', 'en'], // 支持的语言列表
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
	// 添加本地搜索插件
	// docusaurus.config.js
	plugins: [
	  [
		require.resolve("@easyops-cn/docusaurus-search-local"),
		{
		  language: ["en", "zh"],  // 支持中英文
		  indexDocs: true,
		  indexBlog: true,
		  hashed: true,  // 推荐开启，利于缓存
		},
	  ],
	],  
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
            'https://github.com/wincao618/9tripod-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wincao618/9tripod-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '九鼎文档中心', // 修改导航栏标题
        logo: {
          alt: '九鼎文档中心',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left', // 移动到最左
            label: '所有文档', // 修改菜单名称
          },
          {
            type: 'dropdown',
            label: '核心板',
            position: 'left', // 左对齐
            items: [
              {label: 'X3576核心板', to: '/docs/core-board/x3576'},
              {label: '子菜单 2', to: '/docs/core-board/submenu-2'},
            ],
          },
          {
            type: 'dropdown',
            label: '边缘计算',
            position: 'left', // 左对齐
            items: [
              {label: '子菜单 1', to: '/docs/edge-computing/submenu-1'},
              {label: '子菜单 2', to: '/docs/edge-computing/submenu-2'},
            ],
          },
          {
            type: 'dropdown',
            label: '直播机',
            position: 'left', // 左对齐
            items: [
              {label: '子菜单 1', to: '/docs/live-machine/submenu-1'},
              {label: '子菜单 2', to: '/docs/live-machine/submenu-2'},
            ],
          },
          {
            type: 'dropdown',
            label: '闺蜜级',
            position: 'left', // 左对齐
            items: [
              {label: '子菜单 1', to: '/docs/best-friends/submenu-1'},
              {label: '子菜单 2', to: '/docs/best-friends/submenu-2'},
            ],
          },
          {
            type: 'dropdown',
            label: 'AI智能体',
            position: 'left', // 左对齐
            items: [
              {label: '子菜单 1', to: '/docs/ai-agent/submenu-1'},
              {label: '子菜单 2', to: '/docs/ai-agent/submenu-2'},
            ],
          },
          {
            type: 'localeDropdown', // 添加语言切换下拉菜单
            position: 'right', // 语言菜单保持右对齐
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '所有文档', // 修改为 "所有文档"
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wincao618/9tripod-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;