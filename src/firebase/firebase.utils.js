import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyA_n3NiuRh32K1W6wDyREDjNPNmUCo2T4c",
    authDomain: "bu-and-more-db.firebaseapp.com",
    databaseURL: "https://bu-and-more-db.firebaseio.com",
    projectId: "bu-and-more-db",
    storageBucket: "",
    messagingSenderId: "671817377953",
    appId: "1:671817377953:web:9874e5383c1ac975"
  };
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;