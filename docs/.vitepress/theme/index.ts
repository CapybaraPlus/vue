// custom theme, vitepress will automatic detection this file, more about: https://vitepress.dev/zh/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CapybaraUI from '@capybara-ui/components'

export default {
  extends: DefaultTheme, // extends default theme
  enhanceApp({ app }) {
    app.use(CapybaraUI)
  },
} satisfies Theme
