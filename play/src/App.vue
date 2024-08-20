<template>
  <ra-form ref="formRef" :model="form" :rules="rules">
    <ra-form-item label="用户名：" prop="username">
      <ra-input
        v-model="form.username"
        theme="mask"
        clearable
        placeholder="请输入用户名"
        size="medium"
        maxlength="10"
        show-count
      ></ra-input>
    </ra-form-item>
    <ra-form-item label="密码：" prop="password">
      <ra-input
        v-model="form.password"
        theme="mask"
        type="password"
        size="small"
        clearable
        placeholder="请输入密码"
      ></ra-input>
    </ra-form-item>
    <ra-form-item label="城市：" prop="gender">
      <ra-selection height="100px">
        <ra-option label="1"></ra-option>
        <ra-option label="1"></ra-option>
        <ra-option>3</ra-option>
        <ra-option>4</ra-option>
      </ra-selection>
    </ra-form-item>
    <ra-form-item>
      <ra-tooltip content="Submit a Message"
        ><ra-button @click="submit">Submit a Message</ra-button></ra-tooltip
      >
      <ra-button type="default" color="#83edf5" @click="submit"
        >Submit a Message</ra-button
      >
      <ra-button size="small" type="success" @click="submit"
        >Submit a Message</ra-button
      >
      <ra-button size="large" type="warning" theme="plain" @click="submit"
        >Submit a Message</ra-button
      >
      <ra-button size="medium" type="danger" @click="submit"
        >Submit a Message</ra-button
      >
      <ra-button @click="handleClick">重置</ra-button>
    </ra-form-item>
    <ra-form-item>
      <ra-link>同意用户协议</ra-link>
      <ra-link type="primary" href="https://www.baidu.com" target="_blank"
        >同意用户协议</ra-link
      >
      <ra-link type="success">同意用户协议</ra-link>
    </ra-form-item>
  </ra-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RaFormInstance, RaMessage, RaInput } from '@capybara-plus/components'
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
    content: 'Submit Message Successfully !!!',
  })
}
</script>

<style></style>
