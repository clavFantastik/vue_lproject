import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersData: {
      id: '',
      name: ''
    }
  },
  mutations: {
    setUID(state, id) {
      state.usersData.id = id;
    },
    setName(state, n) {
      state.usersData.name = n;
    }
  }
})
