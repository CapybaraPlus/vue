import { defineConfig } from 'vitepress'
import { sidebar, nav, socialLinks } from './configs'

export default defineConfig({
  title: 'CapybaraUI',
  description: 'A Vue3 + TypeScript Component Library',
  base: '/docs/',
  themeConfig: {
    siteTitle: false,
    logo: 'title.svg',
    nav,
    sidebar,
    socialLinks,
  },
})
