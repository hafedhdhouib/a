import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue'),
   
  },{
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/store/AddProduct')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    
    let user = firebase.auth().currentUser
    if (user) {
          next()
    } else {
 
      next({
        name: 'Login'
      })
    }
  } else {
    next()
  }
})
export default router
