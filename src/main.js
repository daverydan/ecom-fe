import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import '../src/scss/styles.scss'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
