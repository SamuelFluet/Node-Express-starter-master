import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

// configurer le début d'url par défaut
axios.defaults.baseURL = "http://localhost:3001/api"

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
