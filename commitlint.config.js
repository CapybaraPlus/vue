export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'deps', // 依赖
        'config', // 配置
        'utils', // 工具
        'components', // 组件
        'styles', // 样式
        'hooks', // 钩子
        'plugins', // 插件
        'test', // 测试
        'release', // 发布
        'ci', // 持续集成
        'docs', // 文档
        'lint', // 代码检查
        'other', // 其它
      ]
    ],
    /**
     * type(scope): <subject>
     */
    'type-enum': [
      2, // 错误级别，0为关闭，1为警告，2为错误
      'always', // 是否应用，always/never
      [
        'feat', // 新功能（feature）
        'fix', // 修复bug
        'docs', // 修改文档
        'style', // 修改代码格式，不影响代码逻辑
        'refactor', // 代码重构，理论上不影响功能逻辑
        'test', // 修改测试用例
        'build', // 构建或其他工具的变动(如webpack)
        'revert', // 还原以前的提交
        'merge', // 分支代码合并
        'chore', // 构建过程或辅助工具的变动
      ],
    ]
  },
}
