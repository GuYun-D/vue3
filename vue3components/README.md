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