import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

const app = createApp(App)
app.use(router)
// app.use(store)
app.mount('#app')

// 可以链式
// createApp(App).use(router).mount("#app")
