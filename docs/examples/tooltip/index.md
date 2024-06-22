# tooltip 文字提示

以 [@floating-ui/vue](https://floating-ui.com/) 为基础实现的类似于原生 `title` 属性的功能，此外还作了一定的扩展

## 基本使用

用该组件包裹想要展示文字提示信息的包含一个根节点的元素，并通过属性 `content` 指定文字提示内容

::: warning
若包裹的元素含有多个根节点，则文字提示只会对第一个根节点元素生效
:::

<preview path="./basic.vue" title="基本使用" />

## 不同的位置

可以通过属性 `placement` 指定文字提示出现的位置，默认值为 `top-center`

<preview path="./placement.vue" title="不同的位置" />

::: tip

1. 尽管指定了“文字提示”出现的位置，但在“文字提示”展示不全的情况下，“文字提示”的位置会自动调整以让其在屏幕上完整可见
2. 如果想要自动设置“文字提示”的位置，可设置属性 `autoPlacement` 为 `true`，该属性会自动调整“文字提示”到最合适的位置（总是选择可用空间最大的位置），所以这会覆盖属性 `placement` 的默认行为

:::

## 不同的触发方式

可以通过属性 `trigger` 指定文字提示的触发方式，有 `hover` 鼠标悬浮触发，`click` 鼠标点击触发；默认值为 `hover`

<preview path="./trigger.vue" title="不同的触发方式" />

## 内容扩展

可以通过 `content` 插槽来实现更加丰富的文字提示，这将覆盖属性 `content` 的内容

<preview path="./content.vue" title="内容扩展" />
