<template>
  <a-button type="primary" v-if="!user.isLogin" class="user-profile-component" @click="login">
    登录
  </a-button>
  <div v-else>
    <a-dropdown-button class="user-profile-component">
      <router-link to="/setting">{{ user.userName }}</router-link>
      <template v-slot:overlay>
        <a-menu class="user-profile-dropdown">
          <a-menu-item key="0" @click="logOut">登出</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown-button>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { message } from 'ant-design-vue'
  import { useUserStore } from '@/store/user'
  const user = useUserStore()
  const router = useRouter()
  const login = () => {
    user.login('michael').then(() => {
      message.success('登录成功')
    })
  }

  const logOut = () => {
    user.logout().then(() => {
      message.success('登出成功')
      router.push('/')
    })
  }
</script>
<style>
  .user-profile-dropdown {
    border-radius: 2px !important;
  }
  .user-operation > * {
    margin-left: 30px !important;
  }
</style>
