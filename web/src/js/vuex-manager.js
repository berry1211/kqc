import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    LoginStatus: '',
    UserName: '',
    Password: ''
  },
  mutations: {
    login(state, password) {
      state.LoginStatus = true
      state.Password = password
    },
    logout(state) {
      state.LoginStatus = false
      state.Password = ''
    },
    setName(state, name) {
      state.UserName = name
    },
    removeName(state) {
      state.UserName = ''
    },
    resetAll(state) {
      state.UserName = ''
      state.LoginStatus = false
    }
  }
})
