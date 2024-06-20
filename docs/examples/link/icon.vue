<template>
  <div>无效图标：<ra-link>default icon</ra-link></div>
  <div>默认图标：<ra-link href="#">default icon</ra-link></div>
  <div>没有图标：<ra-link icon="none">none icon</ra-link></div>
  <div>外链图标：<ra-link href="#" target="_blank">external icon</ra-link></div>
  <div>
    自定义图标：<ra-link href="#" target="_blank" :icon="HashLink"
      >custom icon</ra-link
    >
  </div>
</template>

<script>
import { HashLink } from '@capybara-plus/icons-vue'
</script>
