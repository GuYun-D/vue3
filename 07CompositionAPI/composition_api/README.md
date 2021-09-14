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