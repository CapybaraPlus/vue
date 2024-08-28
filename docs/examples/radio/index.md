# radio 单选框

## 基本用法

想要使用单选的效果，我们可以将其放在一个组中；通过 `label` 属性来显示一个单选按钮的标签或者使用插槽来自定义标签，并通过 `value` 来设置一个单选按钮的值

<preview path="./basic.vue" title="基本用法" />

## 尺寸

单选框同样提供了 `small`、`medium`、`normal`、`large` 的尺寸大小，默认为 `normal`

<preview path="./size.vue" title="尺寸大小" />

## 禁用状态

我们可以单独禁用一个单选框，也可以禁用整个按钮组

<preview path="./disabled.vue" title="禁用状态" />

## 按钮主题

我们还可以使用 `theme='button'` 来设置按钮主题

<preview path="./radio-button.vue" title="按钮主题" />

## radio 属性

| 属性     | 描述             | 类型                          | 可选值                               | 默认值   |
| -------- | ---------------- | ----------------------------- | ------------------------------------ | -------- |
| name     | 原生 `name` 属性 | string                        | -                                    | -        |
| value    | 单选框的值       | `string`、`number`、`boolean` | -                                    | -        |
| label    | 单选框的标签     | `string`                      | -                                    | -        |
| size     | 尺寸             | `string`                      | `small`、`normal`、`medium`、`large` | `normal` |
| disabled | 禁用状态         | `boolean`                     | -                                    | `false`  |

## radio 插槽

| 名称    | 描述              | 作用域参数 |
| ------- | ----------------- | ---------- |
| default | 个性化 label 标签 | -          |

## radio-group 属性

| 属性       | 描述                     | 类型                          | 可选值                               | 默认值   |
| ---------- | ------------------------ | ----------------------------- | ------------------------------------ | -------- |
| name       | 统一设置原生 `name` 属性 | `string`                      | -                                    | -        |
| modelValue | 当前选中的单选框的值     | `string`、`number`、`boolean` | -                                    | -        |
| column     | 是否纵向布局             | `boolean`                     | -                                    | `false`  |
| size       | 尺寸                     | `string`                      | `small`、`normal`、`medium`、`large` | `normal` |
| disabled   | 整体禁用状态             | `boolean`                     | -                                    | `false`  |

## radio-group 事件

| 事件名称 | 描述                               | 参数         |
| -------- | ---------------------------------- | ------------ |
| change   | 当单选框组中选中的值发生变化时触发 | 当前选中的值 |
