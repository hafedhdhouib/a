<template>
  <div class="hero">
    <form class="container" @submit.prevent="Login">
      <section>
        <b-field label="Email">
          <b-input 
            type="email"
            v-model="email"
            placeholder="Username"
            required >
          </b-input>
          </b-field>
          <b-field label="Password">
            <b-input type="password"
              password-reveal
              required
              placeholder="Password"
              v-model="password">
            </b-input>
          </b-field>
          <b-button tag="input" native-type="submit"  type="is-link" />
            <br>-----------<br>
        {{erreur}} 
      </section>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapMutations}from 'vuex'
export default {
data(){
  return{
    msg:null,
    password:null,
    email:null

  }
},
computed:{
     ...mapGetters(['erreur'])
},
methods:{
  Login(){
      var payload={}
      payload.email=this.email
      payload.password=this.password
      this.$store.dispatch('Login',payload)
    }
}
}
</script>

<style>

</style>