import { defineStore } from 'pinia'

export interface IUserProps {
  isLogin: boolean
  userName?: string | null
}
export const useUserStore = defineStore('user', {
  state: (): IUserProps => {
    return {
      isLogin: false,
      userName: null
    }
  },
  actions: {
    async login(userName: string) {
      this.isLogin = true
      this.userName = userName
      Promise.resolve()
    },
    async logout() {
      this.isLogin = false
      this.userName = null
      Promise.resolve()
    }
  }
})
