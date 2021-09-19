<template>
  <div>
    <h2>Home</h2>
    <router-link to="/home/message">
      <!-- <button>首页按钮</button> -->
      <NavBar :titleN="'日你妈'"></NavBar>
    </router-link>
    <!-- 
      props
        - href: 跳转的链接
        - route：路由对象
        - navigate: 跳转函数
        - isActive:当前是否处于活跃的状态,就是是不是在当前状态
        - isExactActive：是否处于精确的状态
     -->
    <mark>-----------------------</mark>
    <br />
    <!-- <router-link to="/home/message" v-slot="props">
      <button>{{ props.href }}</button>
      <p>{{props.route}}</p>
    </router-link> -->

    <router-link to="/home/message" v-slot="props" custom>
      <button @click="props.navigate">{{ props.href }}</button>
      <p>{{ props.route }}</p>
      <p>{{ props.navigate }}</p>
      <p>{{props.isActive}}</p>
    </router-link>
    <b></b>
    <mark>-----------------------</mark>

    <br />
    <router-link to="/home/shops">shops</router-link>
    <br />
    <button @click="jump">首页</button>
    <button>关于</button>

    <router-view></router-view>
  </div>
</template>

<script>
// 获取路由对象
import { useRouter } from "vue-router";

import NavBar from "../components/NavBar.vue";
export default {
  // methods: {
  //   jump() {
  //     console.log(1);
  //     this.$router.push('/home/shops');
  //   },
  // },
  components: {
    NavBar,
  },

  setup() {
    const router = useRouter();
    const jump = () => {
      // 字符串
      // router.push("/home/shops")
      // 对象
      router.push({
        // 跳转路径
        path: "/home/shops",
        // query参数
        query: {
          name: "hah",
          age: 19,
        },
      });

      // 没有历史,参数同push
      // router.replace()

      // 前进后退。正：前进，负：后退
      router.go(1);
    };

    return { jump };
  },
};
</script>

<style scoped>
</style>