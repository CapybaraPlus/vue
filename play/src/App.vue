<template>
  <div style="width: 500px; height: 300px; overflow: scroll">
    <div
      style="
        width: 800px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <ra-tooltip
        :content="content"
        :placement="placement"
        :auto-placement="autoPlacement"
      >
        <div class="hello" style="width: 50px; height: fit-content">hello</div>
      </ra-tooltip>
    </div>
  </div>
  <ra-icon :color="color" size="2em">
    <!-- <ExternalLink></ExternalLink> -->
  </ra-icon>
  <ra-button
    theme="primary"
    hover-animation="zoom-in"
    active-animation="zoom-out"
    block
    @click="handleClick"
    >点击</ra-button
  >
</template>

<script setup lang="ts">
// import RaButton from '@capybara-ui/components/src/button'
// import RaLink from '@capybara-ui/components/src/link'
// import { ExternalLink } from '@capybara-plus/icons-vue'
import { ref } from 'vue'

const color = ref('red')
const autoPlacement = ref(true)
const content = ref('1')
const placement = ref('top-center')

const handleClick = () => {
  // color.value = 'blue'
  autoPlacement.value = !autoPlacement.value
}
</script>

<style scoped></style>
