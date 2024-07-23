<template>
  <ra-form ref="formRef" :model="form" :rules="rules">
    <ra-form-item label="用户名：" prop="username">
      <ra-input
        v-model="form.username"
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
    <ra-form-item>
      <ra-button theme="primary" @click="submit">提交</ra-button>
      <ra-button
        theme="default"
        color="#83edf5"
        active-animation="zoom-out"
        @click="submit"
        >提交</ra-button
      >
      <ra-button theme="success" @click="submit">提交</ra-button>
      <ra-button theme="warning" @click="submit">提交</ra-button>
      <ra-button theme="danger" @click="submit">提交</ra-button>
      <ra-button @click="handleClick">重置</ra-button>
    </ra-form-item>
  </ra-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RaForm, RaFormInstance, RaMessage } from '@capybara-plus/components'
// import ColorDisplay from './components/color-display/color-display.vue'

const formRef = ref<RaFormInstance | null>()

const form = reactive({
  username: '18096323189',
  password: '',
})

const rules = {
  username: {
    required: true,
    validator: (rule: any, val: string) => val.length > 0 && val.length < 3,
    errorMessage: '用户名长度必须大于 0 且小于 3',
    successMessage: '成功',
  },
  password: {
    required: true,
  },
}

const handleClick = () => {
  formRef.value?.reset()
}

const submit = () => {
  formRef.value
    ?.validate()
    .then(() => {
      console.log('success')
    })
    .catch(() => {
      console.log('error')
    })
  RaMessage({
    theme: 'success',
    content: 'hello',
  })
}
</script>

<style></style>
