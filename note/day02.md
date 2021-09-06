# 创建用户代码片段
https://snippet-generator.app/

# 模板语法
允许多个根元素

## React开发模式
- React使用的jsx，所以对应的代码都是编写的类似于js的一种语法；
- 之后通过Babel将jsx编译成 React.createElement 函数调用；

## Vue也支持jsx的开发模式
- 但是大多数情况下，使用基于HTML的模板语法；
- 在模板中，允许开发者以声明式的方式将DOM和底层组件实例的数据绑定在一起；
- 在底层的实现中，Vue将模板编译成虚拟DOM渲染函数

# 指令
## v-bind
- 预期：any或者对象
- 修饰符：.cancel，将kebab-case attribute名转换成cameCase
- 用法：动态绑定一个或多个属性，或一个组件prop到表达式

### 类名绑定
```html
<span :class="{'pp': true}">span标签</span>
<div :class="{'test': isActive}">losssssss</div>

<!-- 数组中支持三元表达式 -->
<li :class="['pp', 'test', isActive ? 'cv' : '']">列表</li>
<li :class="['pp', 'test', {'cv': isActive}]">数组中照样可以对象语法</li>
```

# key的作用
- 主要用于虚拟dom算法，在新旧nodes对比时辨识VNode
- 如果不使用key，vue会使用一直最大限度减少动态元素并且尽可能的尝试修改/服用相同类型元素的算法
- 使用key时，他会基于key的变化重新排列元素顺序，并且移除/销毁key不存在的元素