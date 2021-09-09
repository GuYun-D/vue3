# v-model的本质

```html
<input v-model="searchValue" type="text">
```
即
```html
<input type="text" :value="searchValue" @input="searchValue = $event.target.value">
```

# v-model绑定复选框
每个复选框都要有value属性，绑定到（v-model）一个数组中

单选同上

# v-model的修饰符
- lazy
- number
  默认情况v-model绑定的值会被转换成字符串，使用number修饰符将他变成number类型
- trim
- 