<template>
  <div class="home">
    <h1>👍Compre ou venda👎</h1>
    <ProdutosBuscar/>
    <ProdutosLista/>
  </div>
</template>

<script>
import ProdutosLista from '@/components/ProdutosLista'
import ProdutosBuscar from '@/components/ProdutosBuscar'


export default {
  name: 'Home',
  components:{
    ProdutosLista,
    ProdutosBuscar
  }
}
</script>

<style scoped>
h1{
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>