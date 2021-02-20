import db from '@/firebase/init.js'
import firebase from 'firebase'
import router from '../router/index'
const signinModule = {
    state: {
        user: null,
        msg: null
    },
    getters: {

    }, mutations: {
        setUser({ commit }, payload) {
            status.user = payload
        }
    },
    actions: {
        signin({ commit }, payload) {
            if (payload.email) {
                let ref = db.collection('users').doc(payload.email)
                ref.get().then(doc => {
                    if (doc.exists) {
                        commit("setError", 'email existe deja')
                    }
                    else {
                        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).catch((er) => {
                            commit("setError", er)
                        })
                            .then(user => {
                                ref.set({
                                    email: payload.email,
                                    user_id: user.user.uid
                                }).catch((er) => { })
                                    .then(() => router.push({ name: 'Home' }))
                            })
                    }
                })
            }
            else {
                payload.msg = 'alias importante'
                console.log(payload.alias)
            }
        },
        Login({ commit }, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    console.log(user)
                    router.push({ name: 'Home' })
                })
        },
        Logout({ commit }) {
            firebase.auth().signOut()
        },
        
    }
}

export default signinModule