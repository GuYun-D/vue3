import _ from "lodash-es"
import { add } from "./src/js/math"

/**
 * vite已经默认了对vite的处理
 */
import './src/css/index.css'
/**
 * 使用less只用安装less，不用配置less-loader
 */
import './src/css/title.less'

import mult from './src/ts/mult'

import { createApp } from "vue"
import App from './src/vue/App.vue'

console.log("hello world");
console.log(add(10, 70));
console.log(_.join(["aaa", "bbb", "cccc"], "-"));
console.log(mult(10, 20));

createApp(App).mount("#app")