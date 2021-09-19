import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // 重定向
    paht: '/', redirect: '/home'
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
      {path: '', redirect: "/home/message"},
      {path: 'message', component: () => import("../pages/Message.vue")},
      {path: 'shops', component: () => import("../pages//shop.vue")}
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
  }
]

// 创建路由对象router
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router