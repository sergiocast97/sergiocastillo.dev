import { createApp } from 'vue'
import App from './HomePage.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
