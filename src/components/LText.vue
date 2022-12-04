<script setup lang="ts">
  import { getTextDefaultProps, textStylePropNames } from '@/defaultProps'
  import useComponentCommon from '@/hooks/useComponentCommon'
  const props = defineProps({
    ...getTextDefaultProps(),
    tag: {
      type: String,
      default: 'div'
    }
  })
  const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
</script>
<template>
  <component @click="handleClick" :is="tag" :style="styleProps" class="l-text-component">{{
    text
  }}</component>
</template>

<style scoped>
  .l-text-component {
    box-sizing: border-box;
    white-space: pre-wrap;
    position: relative !important;
  }
</style>
