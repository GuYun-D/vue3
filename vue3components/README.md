# vue知识补充
> 在学习vue2的时候漏掉的一些细节(-_-)

## 组件的css作用域
scoped属性，防止组件之间的样式污染
- 为元素添加了一个data-v-xxxx的属性，然后通过[data-v-xxxx]选择器进行添加样式

# vue3

## 非父子组件通信

### Provide/Inject(祖孙组件)
用于非父子组件深度嵌套，子组件想要获取父组件的数据
无论层级结构有多深，父组件都可以作为其所有子组件的依赖提供者，父组件有一个provide选项，是用来提供数据的，子组件有一个inject选项来开始使用这些数据
通俗的理解，将依赖注入看作是一个long range props,但是父组件不需要知道哪些子组件使用它provide的property，子组件也不需要知道inject的property来自哪里

```vue
<template>
  <div>
    <Home></Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
// log(this) -> undefined
import { computed } from "vue";

export default {
  components: {
    Home,
  },
  /**
   * 在此组件内无法使用provide中的属性，且无法访问this
   * 若要访问this，需要写成函数的形式，并且数据也不是响应式的
   * 使用computed可以使其变成响应式的
  */
  // provide: {
  //   name: "组件传值",
  //   desc: "非父子组件传值"
  // },
  provide() {
    return {
      name: "组件传值",
      desc: "非父子组件传值",
      // length: this.names.length
      length: computed(() => {
        return this.names.length;
      }).value,
    };
  },

  data() {
    return {
      names: ["张三", "李四", "王五"],
    };
  },
};
</script>

<style scoped>
</style>
```

子孙组件
```vue
<template>
  <div>
    <h1>{{name}}</h1>
    <div>{{desc}}</div>
    <p>{{length}}</p>
  </div>
</template>

<script>
  export default {
    // 注入数据
    inject: ["name", "desc", "length"]
  }
</script>
```

### Mitt全局事件总线

vue3移出了$on, $off, $once方法，继续使用全局事件总线的话，使用第三方包
**tiny-emitter**不维护了

**mitt**
```js
npm i mitt
```

## 作用域插槽

## keep-alive
<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。

当组件在 <keep-alive> 内被切换时，它的 mounted 和 unmounted 生命周期钩子不会被调用，取而代之的是 activated 和 deactivated。(这会运用在 <keep-alive> 的直接子节点及其所有子孙节点。)

主要用于保留组件状态或避免重新渲染。

注意，<keep-alive> 是用在其一个直属的子组件被切换的情形。如果你在其中有 v-for 则不会工作。如果有上述的多个条件性的子元素，<keep-alive> 要求同时只有一个子元素被渲染。

**属性** 
好像得给组件加上name
- include： String|RegExp|Array
  只有名称匹配的组件才会被缓存
- exclude：取值同上，匹配到的组件不被缓存
- max: Number|String,最多缓存多少个组件，一旦达到这个值，那么最近一个没有被访问过的组件就会被销毁

## vue3中的异步组件
对于某些组件通过异步的方式进行加载，也会进行代码分包，defineAsyncComponent函数
- 参数
  - 工厂函数；该工厂函数需要返回一个Promise对象
  ```js
  import {defineAsyncComponent} from 'vue'
  const AsyncCategory = defineAsyncComponent(() => import("./asyncCategory.vue"))
  ```
  - 接受一个对象类型，对异步函数进行配置

## 异步组件和Suspense
> 实验性组件，后面看官网 

- 内置的全局组件，组件有两个插槽
  - default：如果default可以显式，那么显示
  - fallback：如果default无法显示，那么fallback插槽的内容显示

```vue
<template>
  <div>
    <home></home>
    <Suspense>
      <template #default>
        <AsyncCategory></AsyncCategory>
      </template>
      <template #fallback>
        <Loading></Loading>
      </template>
    </Suspense>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import { defineAsyncComponent } from "vue";
const AsyncCategory = defineAsyncComponent(() => import("./asyncCategory.vue"));
// 组件注册部分略
</script>
```

## 生命周期
