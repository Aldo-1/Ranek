<template>
  <form action="">
    <input name="busca" id="busca" v-model="busca" type="text" placeholder="Buscar ...">
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

<style scoped>
form{
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}
#busca{
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 4px;
}
#busca:focus, #bousca:hover{
  transform: scale(1.1);
}
#lupa{
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;

}
</style>