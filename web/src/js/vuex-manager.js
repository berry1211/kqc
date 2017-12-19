import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    LoginStatus: '',
    UserName: ''
  },
  mutations: {
    login(state) {
      state.LoginStatus = true
    },
    logout(state) {
      state.LoginStatus = false
    },
    setName(state, name) {
      state.UserName = name
    },
    removeName(state) {
      state.UserName = ''
    }
  }
})
