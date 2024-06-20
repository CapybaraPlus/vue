# link 链接

## 基础用法

通过 `href` 属性指定浏览器支持的合法 URL，通过 `target` 属性指定打开 URL 的窗口类型。

<preview path="./basic.vue" title="基础用法" />

## 不同的主题

通过 `theme` 属性指定链接的主题，支持的值有：`default`、 `primary`、`success`、`warning`、`danger`

<preview path="./theme.vue" title="不同主题" />

## 禁用状态

通过 `disabled` 属性设置链接的禁用状态

<preview path="./disabled.vue" title="禁用状态" />

## 图标

通过 `icon` 属性设置链接的图标，该属性通过 `component` 实现，所以接收一个组件或者字符串；当接收的字符串为 `none` 时表示不显示图标，此外，该组件会自动根据不同的场景按照以下优先级显示不同的图标

- 当传入 `icon` 为字符串时并且值为 `none` 时不显示图标
- 当传入其它 `none` 值时显示对应的图标
- 当未传入 `icon` 并且 `href` 的值为空时，显示 `unlink` 图标
- 当未传入 `icon`， `href` 的值也不为空时，并且 `target` 的值为 `_blank` 时，显示 `external-link` 图标
- 其余情况显示 `link` 图标
  <preview path="./icon.vue" title="链接图标" />
