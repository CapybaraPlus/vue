import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  pluginJs.configs.recommended, // eslint recommended rules
  ...tseslint.configs.recommended, // ts recommended rules
  ...pluginVue.configs['flat/recommended'], // vue recommended rules
  eslintConfigPrettier, // eslint with prettier rules
  {
    ignores: [
      'node_modules',
      'dist',
      '**/*.css',
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.png',
      '**/*.gif',
      '**/*.d.ts',
    ],
  },
]
