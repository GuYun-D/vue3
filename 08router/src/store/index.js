import { createStore } from "vuex"
import { INCREMENT_N } from './mutation-type'
import axios from "axios"

const store = createStore({
  /**
   *  单一状态原则，一个应用只能有一个state
   * - 好处：方便管理和维护
   */
  state() {
    return {
      counter: 0,
      message: "状态管理,封装好了hook",
      ui: "UI组件",
      books: [
        {
          name: "js",
          price: 10,
          count: 8
        },
        {
          name: "vue",
          price: 200,
          count: 10
        }, {
          name: "react",
          price: 100,
          count: 1
        }
      ],

      discount: 0.7,

      bannerList: []
    }
  },

  mutations: {
    increment(state) {
      state.counter++
    },

    decrement(state) {
      state.counter--
    },

    [INCREMENT_N](state, payload) {
      console.log(payload);
      // state.counter += payload
    },

    addBannerData(state, payload) {
      state.bannerList = payload
    }
  },

  actions: {
    /**
     * context = {commit, dispatch, getters, state}
     */
    incrementAction(context, payload) {
      console.log(payload);
      setTimeout(() => {
        context.commit("increment")
      }, 1000);
    },

    getDataAction(context) {
      return new Promise((resolve, reject) => {
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
          context.commit("addBannerData", res.data)
          resolve("哈哈哈哈哈哈哈哈哈")
        }).catch(err => {
          reject(err)
        })
      })
    }
  },

  getters: {
    totalPrice(state) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }

      return totalPrice
    },

    currentDiscount(state, getters) {
      return getters.totalPrice * state.discount
    },

    // 计算数量大于1的书的总价
    coutThree(state) {
      return function (n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price
          }
        }
        return totalPrice
      }
    }
  }
})

export default store