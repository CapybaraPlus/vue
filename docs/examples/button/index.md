# button 按钮

## 基本用法

<preview path="./basic.vue" title="基础用法" ></preview>

## 禁用状态

通过 `disabled` 属性来设置按钮的禁用状态
<preview path="./disabled.vue" title="禁用状态" ></preview>

## 尺寸

我们目前为按钮提供了 `small`、`normal`、`medium`、`large` 四种尺寸，其中 `normal` 为默认值
<preview path="./size.vue" title="按钮尺寸" ></preview>

## 形状

我们可以通过 `shape` 属性来设置按钮的形状，其中 `round` 的圆角表现得更明显一点；`circle` 则是圆形按钮，一个圆形按钮通常只包含了一个图标，否则就会失去圆形的特征
<preview path="./shape.vue" title="按钮形状" ></preview>

## 文字主题

我们可以通过设置 `theme='plain'` 来设置文字主题样式的按钮
<preview path="./plain.vue" title="按钮形状" ></preview>

## 加载状态

我们可以设置 `loading='true'` 来让按钮进入加载状态，当 `loading='false'` 时按钮就会结束加载状态；我们也可以自定义加载时的图标
<preview path="./loading.vue" title="加载状态" ></preview>

## 独占一行

通过设置 `block` 属性来让按钮独占一行，其实是通过设置 `width: 100%` 来实现的
<preview path="./block.vue" title="独占一行" ></preview>

## 自定义颜色

通过 `color` 可以实现自定义颜色
<preview path="./color.vue" title="自定义颜色" ></preview>
