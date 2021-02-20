import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAc_xoj8yRuUHTU8-HL916hykItoYGq6DI",
    authDomain: "vuex-firebase-cecff.firebaseapp.com",
    projectId: "vuex-firebase-cecff",
    storageBucket: "vuex-firebase-cecff.appspot.com",
    messagingSenderId: "91131899828",
    appId: "1:91131899828:web:6c20564a73eda5c1938ce1"
  };
  // Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()