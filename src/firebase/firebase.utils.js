import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVaVvSG08J8G97LIKfFp_M7XeMLrtyk10",
    authDomain: "textura-shop.firebaseapp.com",
    projectId: "textura-shop",
    storageBucket: "textura-shop.appspot.com",
    messagingSenderId: "71021457243",
    appId: "1:71021457243:web:4a5d34e38e25cb0c9e747e",
    measurementId: "G-05R167ZG0Q"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account' });
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase; 
