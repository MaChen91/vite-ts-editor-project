import { VNode } from 'vue'
import { TextComponentProps } from './defaultProps'
export interface PropToForm {
  component: string
  subComponent?: string
  extraProps?: { [key: string]: any }
  text?: string
  options?: { text: string | VNode; value: any }[]
  initalTransform?: (v: any) => any
  afterTransform?: (v: any) => any
  valueProp?: string
  eventName?: string
}

export type PropsToForms = {
  [P in keyof TextComponentProps]?: PropToForm
}
const fontFamilyArr = [
  { text: '宋体', value: '"SimSun","STSong"' },
  { text: '黑体', value: '"SimHei","STHeiti"' },
  { text: '楷体', value: '"KaiTi","STKaiti"' },
  { text: '仿宋', value: '"FangSong","STFangsong"' }
]
const fontFamilyOptions = fontFamilyArr.map((font) => {
  return {
    value: font.value,
    text: (<span style={{ fontFamily: font.value }}>{font.text}</span>) as VNode
  }
})
export const mapPropsToForms: PropsToForms = {
  text: {
    text: '文本',
    component: 'a-textarea',
    extraProps: { rows: 3 },
    afterTransform: (e: any) => e.target.value
  },
  fontSize: {
    text: '字号',
    component: 'a-input-number',
    initalTransform: (v: string) => parseInt(v),
    afterTransform: (e: number) => (e ? `${e}px` : '')
  },
  lineHeight: {
    text: '行高',
    component: 'a-slider',
    extraProps: { min: 0, max: 3, step: 0.1 },
    initalTransform: (v: string) => parseFloat(v),
    afterTransform: (e: number) => e.toString()
  },
  textAlign: {
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    text: '对齐',
    options: [
      { value: 'left', text: '左' },
      { value: 'center', text: '中' },
      { value: 'right', text: '右' }
    ],
    afterTransform: (e: any) => e.target.value
  },
  fontFamily: {
    component: 'a-select',
    subComponent: 'a-select-option',
    text: '字体',
    options: [{ value: '', text: '无' }, ...fontFamilyOptions]
  },
  color: {
    component: 'color-picker',
    text: '字体颜色'
  },
  fontWeight: {
    component: 'icon-switch',
    text: '加粗',
    extraProps: {
      label: (<span style={{ fontWeight: 'bold' }}>B</span>) as VNode,
      tooltip: '加粗'
    },
    initalTransform: (v: string) => v === 'bold',
    afterTransform: (e: boolean) => (e ? 'bold' : '')
  },
  fontStyle: {
    component: 'icon-switch',
    text: '斜体',
    extraProps: {
      tooltip: '斜体',
      label: (<span style={{ fontStyle: 'italic' }}>I</span>) as VNode
    },
    initalTransform: (v: string) => v === 'italic',
    afterTransform: (e: boolean) => (e ? 'italic' : '')
  },
  textDecoration: {
    component: 'icon-switch',
    text: '下划线',
    extraProps: {
      tooltip: '斜体',
      label: (<span style={{ textDecoration: 'underline' }}>I</span>) as VNode
    },
    initalTransform: (v: string) => v === 'underline',
    afterTransform: (e: boolean) => (e ? 'underline' : '')
  }
}
