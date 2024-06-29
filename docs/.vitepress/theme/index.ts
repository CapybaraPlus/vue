// custom theme, vitepress will automatic detection this file, more about: https://vitepress.dev/zh/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CapybaraUI from '@capybara-plus/components'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  extends: DefaultTheme, // extends default theme
  enhanceApp({ app }) {
    app.use(CapybaraUI)
    app.component('DemoPreview', AntDesignContainer)
  },
} satisfies Theme
