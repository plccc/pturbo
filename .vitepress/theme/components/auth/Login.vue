<template>
  <div class="login-container">
    <h2 class="login-title">欢迎登录</h2>
    <a-form :form="form" @submit.prevent="handleSubmit" class="login-form" :model="formState" :rules="rules">
      <a-form-item name="username" :validate-status="usernameError ? 'error' : ''" :help="usernameError">
        <a-input v-model:value="formState.username" placeholder="请输入用户名" />
      </a-form-item>

      <a-form-item name="password" :validate-status="passwordError ? 'error' : ''" :help="passwordError">
        <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button"> 登录 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'
import { reactive, ref } from 'vue'
import { CryptoHelper } from './check'

const formState = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码至少6个字符', trigger: 'blur' }
  ]
}

const usernameError = ref('')
const passwordError = ref('')

function handleSubmit() {
  usernameError.value = formState.username ? '' : '请输入用户名'
  passwordError.value = formState.password.length >= 6 ? '' : '密码至少6个字符'

  if (!usernameError.value && !passwordError.value) {
    const enc_password = CryptoHelper.hmacSHA256(formState.password)
    if (formState.username == import.meta.env.VITE_USER_NAME && formState.password == import.meta.env.VITE_USER_PWD) {
      sessionStorage.setItem('isLogin', 'true')
      window.location = withBase('/')
    } else {
      passwordError.value = '用户名或密码错误'
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.login-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.login-form {
  width: 100%;
}

.login-form-button {
  width: 100%;
}
</style>
