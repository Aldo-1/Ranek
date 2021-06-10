import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:false,
    usuario:{
      id: "",
      email: "",
      nome:"",
      senha:"",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: ""
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    }
  },
  actions: {
    async getUsuario(context, payload){
      const {data} = await api.get(`/usuario/${payload}`)
      context.commit("UPDATE_USUARIO", data)
      context.commit("UPDATE_LOGIN", true)

    }
  },
  modules: {
  }
})
