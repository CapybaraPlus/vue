<template>
  <div class="mb12">
    <span class="mr8">round:</span>
    <ra-button shape="round" size="large" class="mr8">large</ra-button>
    <ra-button shape="round" size="medium" class="mr8">medium</ra-button>
    <ra-button shape="round" class="mr8">normal</ra-button>
    <ra-button shape="round" size="small" class="mr8">small</ra-button>
  </div>

  <div class="mb12">
    <span class="mr8">circle:</span>
    <ra-button shape="circle" size="large" class="mr8">
      <ra-icon><Check /></ra-icon>
    </ra-button>
    <ra-button shape="circle" size="medium" class="mr8"
      ><ra-icon><Check /></ra-icon
    ></ra-button>
    <ra-button shape="circle" class="mr8"
      ><ra-icon><Check /></ra-icon
    ></ra-button>
    <ra-button shape="circle" size="small" class="mr8"
      ><ra-icon><Check /></ra-icon
    ></ra-button>
  </div>
</template>

<script setup lang="ts">
import { Check } from '@capybara-plus/icons-vue'
</script>

<style scoped>
.mb12 {
  margin-bottom: 12px;
}

.mr8 {
  margin-right: 8px;
}
</style>
