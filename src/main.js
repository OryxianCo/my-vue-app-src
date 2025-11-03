import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './components/ButTon.vue'
import './components/CardPage.vue'
import './components/LayOut.vue'
import './components/SideBar.vue'
import './components/SpaCing.vue'
import './components/PlaceHolder.vue'

createApp(App).use(router).mount('#app')
