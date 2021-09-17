import { createApp } from 'vue'
import App from './19 - 自定义插件/App.vue'
import registerDirectives from './17 - 自定义指令/directives/index'



const app = createApp(App)
registerDirectives(app)
/* 插件相关 */
// 自定义插件
import plugin01 from './19 - 自定义插件/plugins/plugin01'
app.use(plugin01)

import plugin02 from './19 - 自定义插件/plugins/plugin02'
app.use(plugin02)

// app.mixin({
//   created(){
//     console.log("全局的created生命周期");
//   }
// })


// 自定义全局指令
app.directive('focus', {
  mounted(el, bindings, vnode, preVnode) {
    console.log("focus mounted");
    el.focus();
  },
})

app.mount('#app')
