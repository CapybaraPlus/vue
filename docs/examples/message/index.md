# message 消息

## 基本用法

选项式 API 可以通过 `this.$message(options)` 来调用组件；组合式 API 可以通过 `RaMessage(options)` 来调用组件；其中参数 `options` 是一个对象，想要实现一个基本的消息，就需要传入属性 `content` 表示消息的内容

<preview path="./basic.vue" title="基础用法" />

## 自动关闭

默认情况下，消息在打开 3 秒后自动关闭，当然也可以通过属性 `duration` 来设置自动关闭的时间，当 `duration` 的值为 0 时，消息将不会自动关闭，需要手动进行关闭

<preview path="./duration.vue" title="自动关闭" />

## 主题

可以通过属性 `theme` 来设置消息的主题，目前支持的主题有 `info`、`success`、`warning`、`error` 四种，默认为 `info`

<preview path="./theme.vue" title="主题" />
