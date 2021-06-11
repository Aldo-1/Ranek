<template>
  <div id="app">
    <TheHeader/>
      <main id="main">
        <transition mode="out-in">
          <router-view/>
        </transition>
      </main>
    <TheFooter/>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import api from '@/services.js'

export default {
  name: "App",
  components:{
    TheHeader,
    TheFooter
  },
  async created(){
    if(window.localStorage.token){
      await api.post('https://ranekapi.origamid.dev/json/jwt-auth/v1/token/validate')
      this.$store.dispatch('getUsuario')
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
label {
  margin-bottom: 5px;
}
body, ul, li, h1, h2, p{
  margin: 0px;
  padding: 0px;
}

ul{
  list-style: none;
}

body{
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #345;
  background: url('./assets/pattern.svg') repeat top;
}

a{
  color: #345;
  text-decoration: none;
}

img{
  max-width: 100%;
  display: block;
}
.btn-disabled,
.btn-disabled:hover{
  background: #bbc;
  transform: scale(1);
}
.btn{
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  cursor: pointer;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}

.btn:hover{
  background: #65d;
  transform: scale(1.1);
}


#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#main{
  flex: 1;
}

input, textarea{
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  transition: all 0.3s;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30,60, 90, 0.1);
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}

input:hover,input:focus, textarea:focus, textarea:hover{
  outline: none;
  box-shadow: 0 6px 12px rgba(30,60,90,0.2);
  border-color: #87f;
}

.v-enter,
.v-leave-top{
  opacity: 0;
}
.v-enter{
  transform: translate3d(0, -20px, 0);
}
.v-leave-top{
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,.v-leave-active{
  transition: all .3s;
}
</style>
