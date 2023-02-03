import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as tf from '@tensorflow/tfjs'

const app = createApp(App)

app.config.globalProperties.$tf = tf // this.$tf 로 사용
app.use(store).use(router).mount('#app')
