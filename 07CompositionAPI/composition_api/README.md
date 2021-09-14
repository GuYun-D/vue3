# mixin

## 命名冲突
- data数据
  - 以自身组件的为主
- 生命周期钩子在合并时，会将生命周期钩子放在数组中，然后进行遍历，也就是说都会执行
- methods，component，directives等值是对象选项，将被合并成同一个对象
  - 比如都有methods选项，并定义了方法，那么都会生效
  - 但是如果对象key相同，那么会取组件对象的键值对，以自身组件为主

## 全局混入
如果组件中的某些选项，是所有的组件都需要拥有的，那么这个时候我们可以使用全局的mixin：
- 全局的Mixin可以使用 应用app的方法 mixin 来完成注册；
- 一旦注册，那么全局混入的选项将会影响每一个组件；

```js
app.mixin({
  created(){
    console.log("全局的created生命周期");
  }
})
```

**执行顺序**
全局混入 ->  混入 -> 组件

# extend
类似于Mixin的方式是通过extends属性
允许声明另外一个组件，类似于Mixins

# Composition API

## options api的缺点
- 当我们实现某一个功能时，这个功能对应的代码逻辑会被拆分到各个属性中；
- 当我们组件变得更大、更复杂时，逻辑关注点的列表就会增长，那么同一个功能的逻辑就会被拆分的很分散；
- 尤其对于那些一开始没有编写这些组件的人来说，这个组件的代码是难以阅读和理解的（阅读组件的其他人）；

## setup

setup中没有绑定this

- 参数：
  - props: 父组件传递过来的值
  - context，也称为是SetupConext, 包含三个属性
    - attrs：所有非prop的attribue
    - slots：父组件传递过来的插槽
    - emit：当我们组件内部需要发出事件时会用到emit
- 返回值
  - 返回一个对象
  - 如果data和setup中同时定义了数据,取后者

## reactive api

## Ref API
Reactive API对传入的类型是有限制的，他要求我们必须传入一个对象或者数组类型
  - 传入基本类型就会报警告

这个时候vue3提供了Ref API,ref会返回一个响应式对象，该对象作为一个响应式的引用维护着她内部的值，这就是ref名称的来源，它内部的值是在ref的value属性中被维护的

```js
setup(){
  let counter = ref(100);

  return {
    counter
  }
}
```

- 使用
  - 在模板中使用counter时，模板引擎会进行分包，相当于是counter = 100
  - 在js中不存在分包，counter.value = 100

- ref自动解包
  这是一个浅层的解包

  **普通对象**

  ```js
  const info = {
    counter
  }
  ```

  ```html
  {{info.counter.value}}
  ```

  **reactive**

  ```js
  const info = reactive({
    info
  })
  ```

  ```html
  {{info.counter}}
  ```

## readonly
我们通过reactive或者ref可以获取到一个响应式的对象，但是某些情况下，我们传入给其他地方（组件）的这个
响应式对象希望在另外一个地方（组件）被使用，但是不能被修改，这个时候如何防止这种情况的出现呢？
- Vue3为我们提供了readonly的方法；
- readonly会返回原生对象的只读代理（也就是它依然是一个Proxy，这是一个proxy的set方法被劫持，并且不
能对其进行修改）
