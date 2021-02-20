<template>
    <div>hello
      <br>
      <button type="submit" @click="Logout">logout</button>
    </div>
</template>
<script>
import firebase from 'firebase'
import db from '../firebase/init'
import { mapActions } from 'vuex'
export default {
    created(){
          },
      methods:{
        ...mapActions(['Logout'])
      }
}
</script>