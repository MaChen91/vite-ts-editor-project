<script setup lang="ts">
  import { useEditorStore } from '../store/editor'
  import EditWrapper from '@/components/EditWrapper.vue'
  import defaultTextTemplates from '@/defaultTemplates'
  import ComponentsList from '@/components/ComponentsList.vue'
  import useLib from '@/hooks/useLib'
  import PropsTable from '@/components/PropsTable.vue'

  const editor = useEditorStore()
  const { addComponent, getCurrentElement, updateCurrentElement } = editor
  const addItem = (component: stringObject) => {
    addComponent(component)
  }

  const handleChange = (e: any) => {
    //console.log('event', e)
    updateCurrentElement(e)
  }
</script>
<template>
  <div class="editor-container">
    <a-layout>
      <a-layout-sider width="300" style="background: yellow">
        <div class="sidebar-container"> 组件列表 </div>
        <components-list :list="defaultTextTemplates" @add="addItem" />
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <div class="preview-list" id="canvas-area">
            <edit-wrapper
              @set-active="getCurrentElement(component.id)"
              v-for="component in editor.components"
              :key="component.id"
              :id="component.id"
            >
              <component v-bind="component.props" :is="useLib[component.name]" />
            </edit-wrapper>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider width="300" style="background: purple" class="settings-panel">
        组件属性
        <props-table
          v-if="editor.currentElement && editor.currentElement.props"
          :props="editor.currentElement.props"
          :id="editor.currentElement.id"
          @change="handleChange"
        />
        <pre>
        {{ editor.currentElement && editor.currentElement.props }}
      </pre
        >
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<style>
  .editor-container .preview-container {
    padding: 24px;
    margin: 0;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .editor-container .preview-list {
    padding: 0;
    margin: 0;
    min-width: 375px;
    min-height: 200px;
    border: 1px solid #efefef;
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    margin-top: 50px;
    max-height: 80vh;
  }
</style>
