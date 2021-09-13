# vue 动画

```vue
<template>
  <div>
    <button @click="toggle">toggle</button>
    <transition name="yun">
      <h2 v-show="isShow">你好，vue3动画</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.yun-enter-from,
.yun-leave-to {
  opacity: 0;
}

.yun-enter-to,
.yun-leave-from {
  opacity: 1;
}

.yun-enter-active,
.yun-leave-active {
  transition: opacity 2s;
}
</style>
```

## 原理
- 自动嗅探目标元素是否用了css过度或者动画，如果有，那么在恰当的实际添加/删除css类名
- 如果transition组件提供了js钩子函数，这些钩子函数将在恰当的时机被调用
- 如果没有找到js钩子并且也没有检测到css过度/动画，DOM插入，删除操作将会立即执行

## 常用的class
若我们没有给transition加上name，那么默认就是v
- v-enter-from: 定义进入过度的开始的状态。在元素被插入之前生效，在元素被插入之后的下一帧移除
- v-enter-active：定义进入过度生效时的状态。在整个进入过度的阶段中应用，在元素被插入之前生效，在过度/动画完成之后移除。这个类用来定义计入过度的过程时间，延迟和曲线函数
- v-enter-to：定义进入过度的结束状态。在元素被插入之后的下一帧生效(与此同时v-enter-from被移除)，在过度/动画完后之后移除
- v-leave-from：定义离开过度的开始状态；在离开过度被触发时立刻生效，下一帧被移除
- v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在
过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
- v-leave-to: 离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave-from 被删除)，在过渡/
动画完成之后移除。

## 过渡和动画同时存在
- vue为了知道过度的完成，内部是在监听transitionend或animationend，到底使用哪一个取决于元素应用的css规则
- 如果我们只是使用了其中的一个，那么Vue能自动识别类型并设置监听；
- 如果同时使用，在这个情况下可能某一个动画执行结束时，另外一个动画还没有结束，就会提前结束动画，导致另一个动画直接结束
- 以设置 type 属性为 animation 或者 transition 来明确的告知Vue监听的类型

```html
<transition name="yun" type="transition">
  <h2 v-show="isShow">你好，vue3动画</h2>
</transition>
```