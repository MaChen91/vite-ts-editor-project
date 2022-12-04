import { createApp } from 'vue'
import './style.css'
import 'ant-design-vue/dist/antd.css'
import { Input, InputNumber, Slider, Radio, Select } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router()).use(createPinia())
app.use(InputNumber).use(Input).use(Slider).use(Radio).use(Select)
app.mount('#app')
