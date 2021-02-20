<template>
    <div class="hero">{{msg}}
        <form class="container" @submit.prevent="addProduct">
            <b-field label="Name">
                <b-input v-model="name" required></b-input>    
            </b-field>
            <b-field label="Price">
                <b-input v-model="price" required></b-input>
            </b-field>
            <div v-for="(t,index) in tags" :key="index">
            <b-field label="Tag">
                <b-input placeholder="Tag" required v-model="tags[index]"/>
                <div class="delete " @click="del(t)"></div>
            </b-field>
            </div>
            <b-field label="An atherTag">
                <input type="text"  placeholder="Tag" @keydown.tab.prevent="addIng"  v-model="another"/>
            </b-field>
            <div v-if="feedback"> {{feedback}}</div>
                <b-button tag="input" native-type="submit"  /> 
        </form>
    </div>
  
</template>

<script>
import db from '@/firebase/init'
export default {
    name:'addproduct',
data(){
    return{
        price:null,
        name:null,
        another:null,
        tags:[],
        feedback:null,
        msg:'Add new Product',
    }
},methods:{
  addProduct(){
      var payload={}
      payload.name=this.name
      payload.price=this.price
      payload.tags=this.tags
      this.$store.dispatch('addProduct',payload)
    }
            
    ,
     addIng(){
      if(this.another){
        this.tags.push(this.another)
        this.another = null
        this.feedback =null
             }else this.feedback='Tag obligatoire'
    },
    del(t){
          this.tags = this.tags.filter(tag => {
        return tag != t
    })}
}}
</script>

<style>
</style>