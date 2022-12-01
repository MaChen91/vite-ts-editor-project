<script setup lang="ts">
  import TemplateList from '@/components/TemplateList.vue'
  import { useTemplateStore } from '../store/template'
  const templateStore = useTemplateStore()
</script>

<template>
  <div class="content-container">
    <template-list :list="templateStore.data" />
  </div>
</template>

<style>
  .page-title {
    color: #fff;
  }
  .content-container {
    background: #fff;
    padding: 0 24px 24px 30px;
    min-height: 85vh;
    max-width: 1200px;
    margin: 50px auto;
    width: 100%;
  }
</style>
