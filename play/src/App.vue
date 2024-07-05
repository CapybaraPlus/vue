<template>
  <ra-form :model="form" :rules="rules">
    <ra-form-item label="用户名：" prop="username">
      <ra-input
        v-model="form.username"
        theme="line"
        clearable
        placeholder="请输入用户名"
      ></ra-input>
    </ra-form-item>
    <ra-form-item label="密码：" prop="password">
      <ra-input
        v-model="form.password"
        theme="line"
        type="password"
        clearable
        placeholder="请输入密码"
      ></ra-input>
    </ra-form-item>
  </ra-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { RaForm } from '@capybara-plus/components'

const form = reactive({
  username: '18096323189',
  password: '',
})

const rules = {
  username: {
    validator: (rule, val: string) => val.length > 0 && val.length < 3,
  },
}
</script>

<style></style>
