import { createApp } from 'vue'
import App from './10 - 异步组件/App.vue'

/**
 * 通过import函数导入的模块，webpack对其打包的时候就会进行分包
 */
import('./10 - 异步组件/utils/tools').then(res => {
  console.log(res);
  console.log(res.add(10, 50));
})

createApp(App).mount('#app')
