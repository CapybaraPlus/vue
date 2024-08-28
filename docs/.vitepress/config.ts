import { defineConfig } from 'vitepress'
import { sidebar, nav, socialLinks } from './configs'
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin'

export default defineConfig({
  title: 'CapybaraPlus',
  description: 'A Vue3 + TypeScript Component Library',
  base: '/docs/',
  themeConfig: {
    siteTitle: false,
    logo: 'title.svg',
    nav,
    sidebar,
    socialLinks,
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview).use(componentPreview)
    },
  },
})
