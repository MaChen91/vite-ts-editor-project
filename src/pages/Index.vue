<script setup lang="ts">
  import UserProfile from '@/components/UserProfile.vue'
  import { useUserStore } from '@/store/user'
  const user = useUserStore()
</script>

<template>
  <div class="homepage-container">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title">
          <router-link to="/">慕课乐高</router-link>
        </div>
        <user-profile :user="user" />
      </a-layout-header>
      <a-layout-content class="home-layout">
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer> © 慕课网（imooc.com）版权所有 | 津ICP备20000929号-2 </a-layout-footer>
  </div>
</template>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .page-title {
    color: #fff;
  }
</style>
