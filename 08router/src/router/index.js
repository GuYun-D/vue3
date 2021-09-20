import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // 重定向
    paht: '/', redirect: '/vuex'
  }, {
    name: "home",
    path: '/home',
    component: () => import(/* webpackChunkName: 'home-chunk' */"../pages/Home.vue"),
    meta: {
      name: "home",
      age: 10,
      height: 20
    },
    children: [
      { path: '', redirect: "/home/message" },
      { path: 'message', component: () => import("../pages/Message.vue") },
      { path: 'shops', component: () => import("../pages//shop.vue") }
    ]
  }, {
    name: "about",
    path: '/about',
    component: () => import(/* webpackChunkName: 'about-chunk' */"../pages/About.vue")
  }, {
    path: "/user/:username/id/:id",
    component: () => import("../pages/User.vue")
  }, {
    // /:mathMatch(.*)*会将路径变成数组：[ "user", "yunyun", "i" ]
    path: "/:mathMatch(.*)", // 不加星：user/yunyun/i
    component: () => import("../pages/404.vue")
  }, {
    path: "/vuex", component: () => import("../pages/VuexPage.vue"),
    children: [
      {
        path: "full", component: () => import("../pages/state封装后.vue")
      },
      {
        path: "getters", component: () => import("../pages/store/getters.vue")
      }
    ]
  }
]

// 创建路由对象router
const router = createRouter({
  routes,
  history: createWebHistory()
})

// 动态添加路由
const categoryRoute = {
  path: "/category",
  component: import("../components/Category.vue")
}


if (localStorage.getItem("ROLE_KEY") == "fdghugtiyouipljsgdyeq") {
  // 添加的是一级路由
  router.addRoute(categoryRoute)

  // 添加二级路由
  router.addRoute("home", {
    path: "homechild",
    component: () => import("../components/HomeChild.vue")
  })
}

// 导航首位
let counter = 0
// to:
// form：
// next: 不推荐使用了，使用返回值来代替
/**
 * 返回值：
 * 1.返回false，不导航
 * 2.undefine/无返回值：进行默认导航
 * 3.字符串。路径：跳转到对应的路径中
 * 4.对象。类似于router.push(...)
 */

router.beforeEach(() => {
  console.log(`发生了第${++counter}次跳转`);
  // console.log(to);
  // console.log(from);

  // if(to.path.indexOf("/home" !== -1)){
  //   return '/about'
  // }

  // return false
})

export default router