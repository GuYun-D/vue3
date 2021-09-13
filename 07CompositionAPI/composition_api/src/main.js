import { createApp } from 'vue'
import App from './01 - mixin和extend/App.vue'

const app = createApp(App)

app.mixin({
  created(){
    console.log("全局的created生命周期");
  }
})

app.mount('#app')
