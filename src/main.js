import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// Estilos globales
import './styles/main.css'
import './styles/animations.css'

createApp(App).use(router).mount('#app')