<script setup lang="ts">
  import { computed } from 'vue'
  import { useEditorStore } from '@/store/Editor'
  const editor = useEditorStore()
  const props = defineProps<{
    id: string
  }>()

  const emits = defineEmits<{
    (event: 'set-active', component: stringObject): void
  }>()

  const onItemClick = (id: string) => {
    emits('set-active', id)
  }

  const isActive = computed(() => {
    return editor.currentElement && editor.currentElement.id === props.id
  })
</script>
<template>
  <div class="edit-wrapper" :class="{ active: isActive }" @click="onItemClick(props.id)"
    ><slot></slot>
  </div>
</template>

<style scoped>
  .active {
    border: 1px solid blue;
  }
</style>
