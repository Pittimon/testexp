import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQlkmnj3YskY6OBGlzNMYVdQP4gF_cKEE",
    authDomain: "testexp-1807c.firebaseapp.com",
    projectId: "testexp-1807c",
    storageBucket: "testexp-1807c.appspot.com",
    messagingSenderId: "1071960669052",
    appId: "1:1071960669052:web:0d46e3516ef6aadb8c02f9",
    measurementId: "G-L9Y79XZJGF"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth, db };