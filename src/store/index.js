import Vue from 'vue'
import Vuex from 'vuex'
import signinModule from './signinModule'
import productModule from './productModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    erreur:null
  },
  mutations: {
    setError(state,payload){
      state.erreur=payload
    }
  },
  getters:{
erreur(state){
  return state.erreur
}
  },
  actions: {
  },
  modules: {
    signin:signinModule,
    product:productModule
  }
})
