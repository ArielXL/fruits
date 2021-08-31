import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [
      { name: 'Orange', count: 0 },
      { name: 'Apple', count: 0 },
      { name: 'Pear', count: 0 },
      { name: 'Pineapple', count: 0 },
      { name: 'Peach', count: 0 }
    ]
  },
  mutations: {
    incrementCount(state, idx) {
      state.fruits[idx].count += 1
    },
    resetCount(state) {
      state.fruits.forEach( (fruit) => {
        fruit.count = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
