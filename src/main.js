import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/main.scss'
import './assets/tailwind.css'
import 'aos/dist/aos.css'
import iconEl from '@/components/icons/iconEl.vue'
import subtitleEl from '@/components/subtitleEl.vue'
import miniTable from '@/components/core/miniTable.vue'
import modalEl from '@/components/core/modalEl.vue'
import modalEl_1 from '@/components/core/modal/modalEl.vue'

createApp(App)
  .use(store)
  .use(router)
  .component('iconEl', iconEl)
  .component('subtitleEl', subtitleEl)
  .component('miniTable', miniTable)
  .component('modalEl', modalEl)
  .component('modalEl_1', modalEl_1)
  .mount('#app')
