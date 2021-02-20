import db from '@/firebase/init.js'
import firebase from 'firebase'
import router from '../router/index'
const productModule={
    state:{

    },
  
    actions:{
        addProduct({ commit }, payload){
            
            db.collection('products').add({
                item:payload.name,
                price:payload.price,
                tags:payload.tags
            }).then(()=>{router.push({name:'index'})})
            }
    },
    mutations:{

    }
}
export default productModule
