<template>
  <section>
    <h2>Crie a sua Conta</h2>
    <transition mode="out-in">
      <button class="btn btn-form" v-if="!criar" @click="criar = true">Criar conta</button>
      <usuario-form v-else>
        <button class="btn">Criar Usuário</button>
      </usuario-form>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from './UsuarioForm.vue'
export default {
  components: { UsuarioForm },
  name: "LoginCriar",
  data() {
    return {
      criar: false
    }
  },
}
</script>

<style scoped>
  h2{
    text-align: center;
    margin-top: 40px;
    margin-bottom: 10px;
  }
  .btn{
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .btn-form{
    max-width: 100%;
  }
</style>