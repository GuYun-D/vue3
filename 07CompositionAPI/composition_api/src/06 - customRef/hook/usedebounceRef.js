// 自定义一个ref
import { customRef } from 'vue'
export default function (value) {
  let timer = null
  return customRef((track, trigger) => {
    return {
      get() {
        // 收集依赖
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          // 触发依赖更新
          trigger()
        }, 1000);
      }
    }
  })
}