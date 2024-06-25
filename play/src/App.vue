<template>
  <ra-mask content="i am a mask 111111111111111">
    <ra-button
      >button
      <template #content>content</template>
    </ra-button>
  </ra-mask>
  <ra-mask content="i am a mask">
    <h1>hello</h1>
  </ra-mask>
  <ra-mask content="i am a mask">
    <div class="box">
      <h2>world</h2>
    </div>
  </ra-mask>
  <ra-tooltip content="i am a tooltip">
    <div>tooltip reference</div>
  </ra-tooltip>
</template>

<style>
.box {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
