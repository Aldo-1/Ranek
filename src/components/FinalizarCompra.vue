<template>
  <section>
    <h2>Endereço de envio</h2>
    <usuario-form>
      <button class="btn" @click.prevent="finalizarCompra">Finalizar Compra</button>
    </usuario-form>
  </section>
</template>

<script>
import UsuarioForm from './UsuarioForm.vue'
import api from '@/services.js'
import { mapState } from 'vuex'

export default {
  nome: "FinalizarCompra",
  components: { UsuarioForm },
  props: ["produto"],
  computed: {
    ...mapState(["usuario"]),
    compra(){
      return {
        comprador_id: this.usuario.email,
        vendendor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado
        }
      }
    }
  },
  methods: {
    async criarTransacao() {
      await api.post("/transacao", this.compra)
      this.$router.push({name: "compras"})
    },
    async criarUsuario() {
      try{
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario)
        await this.$store.dispatch("logarUsuario", this.$store.state.usuario)
        await this.$store.dispatch("getUsuario")
        this.criarTransacao()
      }catch(error){
        console.log(error)
      }
    },
    finalizarCompra(){
      if(this.$store.state.login){
        this.criarTransacao()
      }else{
        this.criarUsuario()
      }
    }
  },
}
</script>

<style scoped>
h2{
  margin-top: 40px;
  margin-bottom: 40px;
}

.btn{
  background: #e80;
}

</style>