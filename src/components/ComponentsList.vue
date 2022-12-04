<script setup lang="ts">
  import LText from '@/components/LText.vue'
  interface Props {
    list: stringObject[]
  }
  const props = withDefaults(defineProps<Props>(), {
    list: () => []
  })
  const emit = defineEmits<{
    (event: 'add', component: stringObject): void
  }>()
</script>

<template>
  <div class="create-component-list">
    <div class="create-component-list__header">
      <!-- <a-input
        v-model:value="searchText"
        placeholder="搜索组件"
        @change="handleSearch"
      /> -->
    </div>
    <div class="create-component-list__body">
      <div
        class="create-component-list__body__item"
        v-for="(component, index) in props.list"
        :key="index"
      >
        <div class="create-component-list__body__item__content">
          <!-- <div class="create-component-list__body__item__content__icon">
            <a-icon :type="component.icon" />
          </div> -->
          <l-text @click="emit('add', component)" v-bind="component" />
        </div>
        <!-- <div class="create-component-list__body__item__action">
          <a-button type="primary" @click="editor.addComponent(component)">添加</a-button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
