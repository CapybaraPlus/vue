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
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // allow any type
      'vue/prefer-import-from-vue': 'off',
    },
  },
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
      'docs/**/*.vue',
      '**/*.js',
      '**/*.d.ts',
    ],
  },
]
