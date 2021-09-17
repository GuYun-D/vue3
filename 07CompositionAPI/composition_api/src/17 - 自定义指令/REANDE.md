# 自定义指令
- 需要对DOM元素进行底层操作时。就需要使用自定义指令了

## 分类
- 局部指令：组件通过directives选项，只能在当前组件中使用
- 全局指令：app的dercetive方法

## 自定义
- 全局
  ```js
    app.directive('focus', {
    mounted(el, bindings, vnode,  preVnode) {
      console.log("focus mounted");
      el.focus();
    },
  })
  ```

- 局部
  ```js
  directives: {
    focus: {
      mounted(el, bindings, vnode, preVnode) {
        console.log("focus mounted");
        el.focus;
      },
    },
  },
  ```

## 指令的生命周期
- created：在绑定元素的 attribute 或事件监听器被应用之前调用。在指令需要附加须要在普通的 v-on 事件监听器前调用的事件监听器时，这很有用。
- beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用。
- mounted：在绑定元素的父组件被挂载后调用。
- beforeUpdate：在更新包含组件的 VNode 之前调用。
- updated：在包含组件的 VNode 及其子组件的 VNode 更新后调用。
- beforeUnmount：在卸载绑定元素的父组件之前调用
- unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次。