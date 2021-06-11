<template>
  <section class="login">
    <h1>Login</h1>
    <form action="">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email">
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha">
      <button class="btn" @click.prevent="logar">Logar</button>
      <ErroNotificacao :erros="erros"/>
    </form>
    <p class="perdeu">
      <a href="/">Perdeu a senha? Clique aqui</a>
    </p>
    <login-criar/>
  </section>
</template>

<script>
import LoginCriar from '../components/LoginCriar.vue'
export default {
  name: "Login",
  components: { LoginCriar },
  data() {
    return {
      login: {
        email: "",
        senha: ""
      },
      erros: []
    }
  },
  methods: {
    async logar() {
      try{
        this.erros = []
        await this.$store.dispatch("logarUsuario", this.login)
        await this.$store.dispatch("getUsuario")
        this.$router.push({name: "usuario"})
      }catch(err){
        this.erros.push(err.response.data.message)
      }
    }
  },
}
</script>

<style scoped>
.login{
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}
form{
  display: grid;
}

.btn{
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
h1{
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
.perdeu{
  text-align: center;
  margin: 20px auto 0 auto;
}
.perdeu a:hover{
  color: #87f;
  text-decoration: underline; 
}
</style>