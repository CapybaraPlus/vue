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
    <ra-form-item label="性别">
      <ra-radio-group
        v-model="form.gender"
        theme="button"
        size="small"
        @change="handleChange"
      >
        <ra-radio label="男" value="male" />
        <ra-radio label="女" value="female" />
        <ra-radio label="保密" value="secret" />
      </ra-radio-group>
    </ra-form-item>
    <ra-form-item label="城市：" prop="gender">
      <ra-selection
        v-model="form.city"
        width="200px"
        height="200px"
        :multiple="multiple"
        disabled
        @change="handleChange"
        @input="handleInput"
      >
        <ra-option
          v-for="item of cities"
          :key="item.id"
          :label="item.name"
          :value="item.value"
          :disabled="item.disabled"
        >
        </ra-option>
      </ra-selection>
    </ra-form-item>
    <ra-form-item>
      <ra-button size="large" type="primary" @click="handleClick"
        >update</ra-button
      >
      <ra-button type="success" @click="handleClick2">delete</ra-button>
      <!-- <ra-link>同意用户协议</ra-link>
      <ra-link type="primary" href="https://www.baidu.com" target="_blank"
        >同意用户协议</ra-link
      >
      <ra-link type="success">同意用户协议</ra-link> -->
    </ra-form-item>
  </ra-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RaFormInstance, RaInput, RaRadio } from '@capybara-plus/vue'
// import ColorDisplay from './components/color-display/color-display.vue'

const formRef = ref<RaFormInstance | null>()
// const loading = ref(false)

setTimeout(() => {
  console.log('upadte')

  form.username = '1'
}, 1000)

const form = reactive({
  username: '18096323189',
  password: '',
  gender: 'male',
  city: '',
})

const cities = ref([
  {
    id: 1,
    name: '北京',
    value: 'beijing',
    disabled: false,
  },
  {
    id: 2,
    name: '上海',
    value: 'shanghai',
    disabled: false,
  },
  {
    id: 3,
    name: '广州',
    value: 'guangzhou',
    disabled: false,
  },
  {
    id: 4,
    name: '深圳',
    value: 'shenzhen',
    disabled: false,
  },
  {
    id: 5,
    name: '成都',
    value: 'chengdu',
    disabled: false,
  },
  {
    id: 6,
    name: '杭州',
    value: 'hangzhou',
    disabled: false,
  },
  {
    id: 7,
    name: '武汉',
    value: 'wuhan',
    disabled: false,
  },
  {
    id: 8,
    name: '天津',
    value: 'tianjin',
    disabled: false,
  },
  {
    id: 9,
    name: '黑龙江',
    value: 'heilongjiang',
    disabled: false,
  },
])

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

const name = ref('gender')

const multiple = ref(true)

const handleClick = () => {
  name.value = 'sex'
  // cities.value.forEach((item) => {
  //   item.value = item.value.toUpperCase()
  // })
  // multiple.value = !multiple.value
}

const handleClick2 = () => {
  cities.value.splice(Math.floor(Math.random() * cities.value.length), 1)
}

const handleChange = (value: any) => {
  console.log('change', value)
}

const handleInput = (val: any) => {
  console.log('input', val)
}
// const handleClick = () => {
//   formRef.value?.reset()
// }

// const submit = () => {
//   loading.value = true
//   formRef.value
//     ?.validate()
//     .then(() => {
//       console.log('success')
//     })
//     .catch(() => {
//       console.log('error')
//     })
//   RaMessage({
//     theme: 'success',
//     content: 'Submit Message Successfully !!!',
//   })
//   setTimeout(() => {
//     loading.value = false
//   }, 3000)
// }
</script>

<style></style>
