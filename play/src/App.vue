<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
        :trigger="trigger"
        disabled
      >
        <template #content>
          <ra-icon>
            <ExternalLink></ExternalLink>
          </ra-icon>
          top-start
        </template>
        <ra-button>top-start</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <ra-button>top</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <ra-button>top-end</ra-button>
      </ra-tooltip>
    </div>
    <div class="row">
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <ra-button>left-start</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <ra-button>right-start</ra-button>
      </ra-tooltip>
    </div>
    <div class="row">
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <ra-button class="mt-3 mb-3">left</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <ra-button>right</ra-button>
      </ra-tooltip>
    </div>
    <div class="row">
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <ra-button>left-end</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <ra-button>right-end</ra-button>
      </ra-tooltip>
    </div>
    <div class="row center">
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <ra-button>bottom-start</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <ra-button>bottom</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <ra-button>bottom-end</ra-button>
      </ra-tooltip>
    </div>
  </div>
  <ra-button @click="handleClick">点击</ra-button>
</template>

<script setup lang="ts">
import { ExternalLink } from '@capybara-plus/icons-vue'
import { ref } from 'vue'

const trigger = ref('click')
const handleClick = () => {
  trigger.value = 'hover'
}
</script>

<style>
.tooltip-base-box {
  width: 300vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
