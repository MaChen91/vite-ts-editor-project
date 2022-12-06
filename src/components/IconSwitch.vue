<template>
  <a-tooltip :title="props.tooltip">
    <a-button
      :type="value ? 'primary' : 'default'"
      @click="handleChange"
      shape="circle"
      size="middle"
    >
      <render-vnode :vNode="props.label" />
    </a-button>
  </a-tooltip>
</template>
<script lang="ts">
  import RenderVnode from './RenderVnode'
  export default {
    components: {
      RenderVnode
    }
  }
</script>
<script setup lang="ts">
  interface Props {
    label?: string | Object
    tooltip?: string
    value: boolean
  }
  const props = withDefaults(defineProps<Props>(), {
    label: '',
    tooltip: '',
    value: false
  })

  const emits = defineEmits<{
    (event: 'change', value: boolean): void
  }>()

  const handleChange = () => {
    emits('change', !props.value)
  }
</script>

<style scoped></style>
