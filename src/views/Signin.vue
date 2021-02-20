<template>
  <div class="form">
    <h1>This is an signin page</h1>
    <div class="title is-vertical is-4" >
      <section>
        <b-field label="Email">
          <b-input icon="email" type="email" v-model="email" />
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            password-reveal
            required
            placeholder="Password"
            v-model="password"
          >
          </b-input>
        </b-field>
        <b-button tag="input" native-type="submit" type="is-link" @click="Signin" />
        <br>-----------<br>
        {{erreur}}
        
      </section>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations}from 'vuex'
export default {
  nama: "sognin",
  data() {
    return {
      email: "",
      password: "",
      msg: '',
    };
  },
  computed:{
     ...mapGetters(['erreur'])
     },
  methods:{
    
    Signin(){
      var payload={}
      payload.email=this.email
      payload.password=this.password
      payload.msg=this.msg
      this.$store.dispatch('signin',payload)
    }
  }
}
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}
</style>