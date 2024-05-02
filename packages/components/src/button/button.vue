<template>
  <div>{{ ucn.m("primary") }}</div>
</template>

<script setup lang="ts">
import { useClassName } from "@capybara-ui/utils";

const ucn = useClassName("button");
</script>

<style scoped></style>
