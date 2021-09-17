import dayjs from 'dayjs'

export default function (app) {
  let formatString = "YYYY-MM-DD HH:mm:ss"

  app.directive("format-time", {
    created(el, bindings){
      // created做数据初始化的操作
      if(bindings.value){
        formatString = bindings.value
      }
    },


    mounted(el, bindings) {
      let textContent = el.textContent
      // console.log(textContent);
      let timestamp = parseInt(textContent)
      if (textContent.length === 10) {
        // 10位说明是秒，转成毫秒
        timestamp = timestamp * 1000
      }

      el.textContent = dayjs(timestamp).format(formatString)
    }
  })
}