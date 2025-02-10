import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'cn-ZH',
  title: 'Minecraft Server Doc',
  description: '一个 Minecraft 开服文档，从入门到精通',

  theme: defaultTheme({
    locales: {
      '/': {
        lang: 'zh-CN', // 配置默认语言
        title: 'Minecraft Server Doc',
        description: '一个 Minecraft 开服文档，从入门到精通',
      },
    },
        // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/quickstart' },
      {
        text: '核心教程',
        children: [
          { text: '服务端配置', link: '/guide/server-config' },
          { text: '插件系统', link: '/guide/plugins' }
        ]
      },
      { text: '问题排查', link: '/troubleshooting/' }
    ],

    // 侧边栏配置
    sidebar: {
      '/': [ // 主页路径
        {
          text: '🏠 首页',
          collapsible: false,
          children: [
            '/', // 主页链接
          ]
        }
      ],
      '/guide/': [
        {
          text: '🚀 快速开始',
          collapsible: true,
          children: [
            {
              text: '入门指南',
              link: '/guide/help-mian'
            },
            {
              text: '服务端核心列表',
              link: '/guide/serverlist'
            },
            {
              text: '服务器配置',
              link: '/guide/serverconfig'
            }
          ]
        },
      ]
    },

    // 其他主题配置
    repo: 'https://github.com/banchen21/mc-doc',
    docsBranch: 'main',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者'
  }),

  bundler: viteBundler(),

  // 额外配置建议
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  // 指定构建输出目录
  dest: '../dist'
})