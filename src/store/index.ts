import { api } from '@/services';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: '' as string,
      nome: '' as string,
      email: '' as string,
      senha: '' as string,
      cep: '' as string,
      rua: '' as string,
      numero: '' as string,
      bairro: '' as string,
      cidade: '' as string,
      estado: '' as string
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },

    UPDATE_USER(state, payload) {
      state.usuario = payload
    }
  },
  actions: {
    getUser(context, payload) {
      api.get(`usuario/${payload}`)
      .then(r => {
        context.commit('UPDATE_USER', r.data)
        context.commit('UPDATE_LOGIN', true)
      })
    }
  },
  modules: {
  }
})
