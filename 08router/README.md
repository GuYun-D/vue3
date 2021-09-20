# URL的hash
Url的hash也就是锚点（#），本质上时改变window.location的href属性
优势就是在低版本ie中也能运行，但是缺陷是有一个#
```html
<div id="app">
  <a href="#/home">home</a>
  <a href="#/about">about</a>
  <div class="content">
  </div>
</div>
<script>
  const contentEl = document.querySelector(".content")
  window.addEventListener("hashchange", () => {
    console.log("hash发生改变");
    switch (location.hash) {
      case "#/home":
        contentEl.innerHTML = "home"
        break;
      case "#/about":
        contentEl.innerHTML = "about"
        break;
      default:
        contentEl.innerHTML = "index"
        break
    }
  })
</script>
```

# HTML5的History
History接口是h5新增的，他有六种模式改变url而不刷新页面
- replaceState：替换原来的路径
- pushState：使用新的路径
- popState：路径的回退
- go：向前想后改变路径
- forword：向前改变路径
- back：向后改变路径

```html
<body>
  <div id="app">
    <a href="/home">home</a>
    <a href="/about">about</a>
    <div class="content">
    </div>
  </div>

  <script>
    const contentEl = document.querySelector(".content")
    const aEls = document.getElementsByTagName('a')
    const changeContent = () => {
      switch (location.pathname) {
        case "/home":
          contentEl.innerHTML = "home"
          break;
        case "/about":
          contentEl.innerHTML = "about"
          break;
      }
    }

    for (let aEl of aEls) {
      aEl.addEventListener('click', e => {
        e.preventDefault()
        // console.log("a click");
        const href = aEl.getAttribute("href")
        console.log(href);
        // push的方法相当于是压栈
        history.pushState({}, '', href)

        changeContent()
      })
    }

    window.addEventListener("popstate", changeContent)


  </script>
</body>
```

# router-link
- to
- replace: 设计replace属性，会调用router.replace(),而不是router.push(),就是不能回退。布尔值
  ```html
  <router-link replace to="/home">首页</router-link>
  ```
- active-class：设置激活a元素后用的clss，默认是router-link-active
- exact-active-class:连接精准激活时，应用于渲染的a的class，默认值是router-link-exact-active
- tag属性（4删除了）

# 路由懒加载
```js
const routes = [
  {
    // 重定向
    paht: '/', redirect: '/home'
  }, {
    path: '/home', component: () => import(/* webpackChunkName: 'home-chunk' */"../pages/Home.vue")
  }, {
    path: '/about', component: () => import(/* webpackChunkName: 'about-chunk' */"../pages/About.vue")
  }]
```

# 路由的其他属性
- name: 路由独一无二标识
- meta：自定义数据

# 动态路由基本匹配

# 插槽

- html标签
```js
<router-link to="/home/message">
  <button>首页按钮</button>
</router-link>
```

- 组件
```html
<router-link to="/home/message">
  <NavBar :titleN="'日你妈'"></NavBar>
</router-link>
```

- custom 自定义
```html
<router-link to="/home/message" v-slot="props">
  <button>{{ props.href }}</button>
  <p>{{props.route}}</p>
  <p>{{props.navigate}}</p>
</router-link>
```
这样写，最后渲染的结果就是button和p都是包裹在a里面的，也都是在触发a的作用
```html
<router-link to="/home/message" v-slot="props" custom>
  <button @click="props.navigate">{{ props.href }}</button>
</router-link>
```

- router-view
  ```html
  <!-- 
  Component：拿到当前切换的组件
  route：路由对象
 -->
  <router-view v-slot="props">
    <transition name="yun">
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
    </transition>
  </router-view>
  ```