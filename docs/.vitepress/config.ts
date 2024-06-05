import { defineConfig } from 'vitepress'
import useSidebar from './configs/useSidebar'

export default defineConfig({
  title: 'CapybaraUI',
  description: 'A Vue3 + TypeScript Component Library',
  base: '/docs/',
  themeConfig: {
    siteTitle: false,
    logo: 'title.svg',
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/examples/button/' },
      {
        text: 'beta',
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/Ranaran315/capybara-ui.git',
          },
          {
            text: '参与贡献',
            link: 'https://github.com/Ranaran315/capybara-ui.git',
          },
        ],
      },
    ],

    sidebar: useSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ranaran315/capybara-ui.git' },
    ],
  },
})
