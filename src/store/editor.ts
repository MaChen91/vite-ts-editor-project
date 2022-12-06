import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { TextComponentProps } from '@/defaultProps'
export type compType = 'LText' //| 'LImage' | 'LButton'
export interface IComponentData {
  // 这个元素的 属性，属性请详见下面
  props: Partial<TextComponentProps>
  // id，uuid v4 生成
  id: string
  // 业务组件库名称 l-text，l-image 等等
  name: compType
}

const testComponentData: IComponentData[] = [
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: '这是一段文本',
      textAlign: 'left',
      fontSize: '16px',
      color: '#000000',
      fontFamily: '"SimSun","STSong"',
      fontWeight: '',
      fontStyle: '',
      textDecoration: ''
    }
  },
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: '来啊来啊',
      fontSize: '20px',
      color: '#1890ff'
    }
  }
]

export interface IEditorState {
  components: IComponentData[]
  currentElement: IComponentData | undefined
}

export const useEditorStore = defineStore('editor', {
  state: (): IEditorState => ({
    components: testComponentData,
    currentElement: undefined
  }),
  getters: {},
  actions: {
    addComponent(props: Partial<stringObject>, name: compType = 'LText') {
      this.components.push({
        id: uuidv4(),
        name,
        props
      })
    },
    getCurrentElement(id: string) {
      this.currentElement = this.components.find((item) => item.id === id)
    },
    updateCurrentElement({ key, value }: { key: 'text'; value: string }) {
      if (this.currentElement && this.currentElement.props) {
        this.currentElement.props[key] = value
      }
    }
  }
})
