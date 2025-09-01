import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ConfigProvider } from 'vant';

import App from './App.vue'
import router from './router'

import './styles/index.css'
import './utils/vant-function-components'

const app = createApp(App)

app.use(ConfigProvider);

app.use(router)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
