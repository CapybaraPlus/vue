/**
 * @description git commit -m "type(scope): your commit message"
 * @example git commit -m "feat(deps): add new dependency: vue"
 * @example git commit -m "fix(components): fix icon bug"
 */

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    /**
     * type(scope): <subject>
     */
    'type-enum': [
      2,
      'always',
      [
        'feat', // A new feature
        'fix', // A bug fix
        'docs', // Documentation only changes
        'styles', // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'perf', // A code change that improves performance
        'test', // Adding missing tests or correcting existing tests
        'build', // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        'chore', // Other changes that don't modify src or test files
        'revert', // Reverts a previous commit
      ],
    ],
    'scope-enum': [
      2, // the level of the rule: 0 = disable, 1 = warning, 2 = error
      'always', // whether applicate ,always/never
      [
        'deps', // dependencies
        'config', // configuration
        'utils', // package utils
        'components', // package components
        'styles', // package theme-chalk
        'hooks', // package hooks
        'test', // test
        'release', // release
        'lint', // code lint
        'play', // playground
        'other', // other
      ],
    ],
  },
}
