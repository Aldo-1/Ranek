<template>
  <form action="">
    <input name="busca" id="busca" v-model="busca" type="text">
    <input type="submit" id="lupa" value="buscar" @click.prevent="buscarProdutos">
  </form>
</template>

<script>
export default {
  name: "produtoslista",
  data() {
    return {
      busca: ''
    }
  },
  methods: {
    buscarProdutos() {
      this.$router.push({query: {q: this.busca}})
    }
  },
}
</script>

<style>

</style>