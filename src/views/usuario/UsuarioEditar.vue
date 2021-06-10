<template>
  <usuario-form>
    <button class="btn" @click.prevent="atualizarUsuario">Editar usuario</button>
  </usuario-form>
</template>

<script>
import UsuarioForm from '../../components/UsuarioForm.vue'
import api from '@/services.js'
export default {
  components: { UsuarioForm },
  methods: {
    async atualizarUsuario() {
      try{
        await api.put(`/usuario`, this.$store.state.usuario)
        this.$store.dispatch("getUsuario")
        this.$router.push('/usuario')
      }catch(err){
        console.log(err)
      }
    }
  },
}
</script>

<style>

</style>