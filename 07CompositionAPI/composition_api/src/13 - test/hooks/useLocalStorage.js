import { ref, watch } from "vue";

/**
 * 数据缓存
 * @param {*} key 存的名
 * @param {*} value 存的值
 */
export default function (key, value) {
  const data = ref(value)

  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    data.value = JSON.parse(window.localStorage.getItem(key))
  }

  watch(data, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
  })

  return data
}