import { createApp } from 'vue'
import App from './16 - jsx/App.vue'

const app = createApp(App)

// app.mixin({
//   created(){
//     console.log("全局的created生命周期");
//   }
// })

app.mount('#app')
