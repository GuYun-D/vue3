export const demoMixin = {
  data(){
    return {
      message: "混入的message"
    }
  },

  methods: {
    foo(){
      console.log("混入中的函数");
    }
  },

  created(){
    console.log("混入的created函数");
  }
}