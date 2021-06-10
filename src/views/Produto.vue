<template>
  <section >
    <div v-if="Object.keys(produto).length" class="produto">
      <ul class="fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo">
        </li>
      </ul>
      <div class="info"> 
        <h1>{{produto.nome}}</h1>
        <p class="preco">{{produto.preco | numeroPreco}}</p>
        <p class="descricao">{{produto.descricao}}</p>
        <transition v-if="produto.vendido === 'false'" mode="out-in">
          <button class="btn" v-if="!finalizar" @click="finalizar = true">Comprar</button>
          <finalizar-compra v-else :produto="produto"></finalizar-compra>
        </transition>

        <button v-else class="btn" disabled> Produto vendido</button>
      </div>
    </div>
    <pagina-carregando v-else/>
  </section>
</template>

<script>
import api from '@/services.js'
import PaginaCarregando from '../components/PaginaCarregando.vue'
import FinalizarCompra from '../components/FinalizarCompra.vue'
export default {
  components: { PaginaCarregando, FinalizarCompra },
  name:"produto",
  props:["id"],
  data() {
    return {
      produto: {},
      finalizar: false
    }
  },
  methods: {
    async getProduto() {
      const {data} = await api.get(`/produto/${this.id}`)
      this.produto = data
    }
  },
  created () {
    this.getProduto()
  },
}
</script>

<style scoped>
.produto{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}
.preco{
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao{
  font-size: 1.2rem;
}

.btn{
  margin-top: 60px;
  width: 200px;
}
</style>