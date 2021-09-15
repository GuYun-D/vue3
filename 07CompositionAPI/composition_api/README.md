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
```js
import { reactive, ref, readonly } from "vue";
export default {
  setup(props, { attrs, slots, emit }) {
    // 普通对象
    const info = {
      name: "yun",
    };

    const infoReadonly = readonly(info);
    // 局部函数
    const updateState = () => {
      // infoReadonly.name = 'hui'
      info2Readonly.name = "hui";
    };

    // 响应式的对象
    const info2 = reactive({
      name: "why",
    });

    const info2Readonly = readonly(info2);

    // 在给子组件传递数据时，应该传递响应式的数据
    // 因为info2是可以进行修改的

    return {
      updateState,
    };
  },
};
```

## Reactive判断的API
- isProxy：检查对象是否是reactive或readonly创建的proxy对象
- isReactive：检查对象是否是由reactive创建的响应式代理，如果该代理是readonly创建的，但是包裹了由reactive创建的另一个代理，也返回true
- isReadonly：检查对象是否是由readonly创建的只读代理
- isRaw：返回reactive或readonly代理的原始对象(谨慎使用)
- shallowReactive：创建响应式代理，它跟踪其自身property的响应性，但不执行嵌套对象的生层次响应式转换
- shallowReadonly：创建一个proxy，使其自身的property为只读，但不执行嵌套对象的深度只读转换

## toRefs
当我们对reactive对象进行解构的时候，解构出来的值并不是响应式的，所以要使用toRefs函数，可以将reactive返回的对象中的属性都转成ref；

```js
 setup() {
    const info = reactive({
      name: "张三",
      age: 20,
    });
    let { name, age } = toRefs(info);

    const changeAge = () => {
      info.age++;
      age.value++;
    };

    return {
      info,
      name,
      age,
      changeAge,
    };
  },
  ```
这种做法相当于已经在state.name和ref.value之间建立了 链接，任何一个修改都会引起另外一个变化；

## toRef
toRefs是将rective对象中的所有属性转换成ref，建立链接
toRef只是将其中一个属性转换成ref，建立链接
- 参数
  - obj，源对象
  - key：要解构的值
```js
  let age = toRef(info, "age");
```

## unref
获取一个ref引用中的value，如果参数是一个ref，则返回内部值，否则返回参数本身，
即
```js
val = isRef(val) ? val.value : val
```

## isRef
判断是否是一个ref对象

**下面的api用的少**

## shallowRef
创建一个浅层的ref对象

## triggleRef
手动触发和shallowRef相关联的副作用

```js
setup() {
  // 创建了一个浅层的ref对象，修改name的值得时候是不成功的
  const info = shallowRef({ name: "张三" });
  const changeInfo = () => {
    info.value.name = "李四";

    // 使用triggerRef手动触发obj的副作用，就比如说响应式，上面就会修改成功
    triggerRef(info)
  };
  return {
    info,
    changeInfo,
  };
},
```

## customRef
创建一个自定义的ref，并对其依赖项跟踪和更新进行显式的控制。
- 需要一个工厂函数，该函数接收track和trigger函数作为参数
- 并且应该返回一个带有get和set的对象
- 对双向绑定的属性进行节流-> 06

# computed

# watch
composition api的侦听器

- watchEffect：用于自动收集响应式数据的依赖
  ```js
  // 默认页面一打开就会执行回调一次
  // 依赖要放在回调里面才能进行监听
  watchEffect(() => {
    console.log("name", name.value, "age", age.value);
  });
  ```

  - 清除副作用
  比如在开发中我们需要在侦听函数中执行网络请求，但是在网络请求还没有达到的时候，我们停止了侦听器，或者侦听器侦听函数被再次执行了。那么上一次的网络请求应该被取消掉，这个时候我们就可以清除上一次的副作用；
  ```js
  const stop = watchEffect((onInvalidate) => {
    onInvalidate(() => {
      // 在这个函数中清除额外的副作用
      // 
      console.log("副作用清除");
    })
    console.log("name", name.value, "age", age.value);
  });
  ```
- watch：需要手动指定侦听器的数据源,侦听的函数的数据源有两种类型
  - 一个getter函数，但是该getter函数必须引用可响应式的对象（比如reactive，ref）
  - 直接写入一个可响应式的对象，reactive或者ref（常用ref）