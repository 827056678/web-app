import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { UserInfo } from '@/types'

export const useUserStore = defineStore('user', () => {
  
  const token = ref<string>('')
  const userInfo = ref<UserInfo | null>(null)

  
  const isLoggedIn = computed(() => !!token.value)

  const logout = () => {
    token.value = ''
    userInfo.value = null
  }

  return { 
    token, 
    userInfo, 
    isLoggedIn, 
    logout 
  }
})