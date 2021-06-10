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
    },
    usuario_produtos:null
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos = payload
    },
    ADD_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos.unshit(payload)
    }
  },
  actions: {
    async getUsuarioProdutos(context){
      const {data} = await api.get(`/produto?=usuario_id=${context.state.usuario.id}`)
      context.commit('UPDATE_USUARIO_PRODUTOS', data)
    },
    async getUsuario(context, payload){
      const {data} = await api.get(`/usuario/${payload}`)
      context.commit("UPDATE_USUARIO", data)
      context.commit("UPDATE_LOGIN", true)
    },
    async criarUsuario(context,payload){
      context.commit("UPDATE_USUARIO", {id: payload.email})
      await api.post(`/usuario`, payload)
    },
    deslogarUsuario(context){
      context.commit("UPDATE_USUARIO", {
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
      })
      context.commit("UPDATE_LOGIN", false)
    }
  },
  modules: {
  }
})
