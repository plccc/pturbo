<template>
  <div v-if="isLocked" class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg border text-center">
    <h1 class="text-3xl font-bold mb-4">页面已锁定</h1>
    <p class="mb-4">请输入密码以查看此页面</p>
    <input v-model="passwordInput" type="password" class="border p-2 mb-4 w-full" placeholder="输入密码" />
    <button @click="unlockPage" class="px-4 py-2 bg-blue-500 text-white rounded">解锁</button>
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script setup>
import CryptoJS from 'crypto-js'
import { ref } from 'vue'

const correctHash = import.meta.env.VITE_PAGE_PASSWORD_HASH // 从环境变量中获取哈希值
const salt = import.meta.env.VITE_PAGE_PASSWORD_SALT // 从环境变量中获取盐
const passwordInput = ref('')
const isLocked = ref(true)
const error = ref('')

const unlockPage = () => {
  const hash = CryptoJS.SHA256(passwordInput.value + salt).toString()
  console.log(`输入密码哈希: ${hash}`) // 用于调试
  console.log(`正确哈希: ${correctHash}`) // 用于调试
  if (hash === correctHash) {
    const unlockData = {
      unlocked: true,
      timestamp: new Date().getTime()
    }
    localStorage.setItem('pageUnlockData', JSON.stringify(unlockData))
    isLocked.value = false
    error.value = ''
  } else {
    error.value = '密码错误，请重试'
  }
}

// 检查本地存储中是否已有解锁标记且未过期
const storedData = localStorage.getItem('pageUnlockData')
if (storedData) {
  const { unlocked, timestamp } = JSON.parse(storedData)
  const currentTime = new Date().getTime()
  const expirationTime = 24 * 60 * 60 * 1000 // 24小时
  if (unlocked && currentTime - timestamp < expirationTime) {
    isLocked.value = false
  }
}
</script>
