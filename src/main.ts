import { createApp } from 'vue'
import App from './app/App.vue'
import '@/assets/styles/index.scss'
import { i18n } from '@/plugins/VueI18n'

createApp(App).use(i18n).mount('#app')
