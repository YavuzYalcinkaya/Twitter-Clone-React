import firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAOFzie-hKxDtjkTKuD5HGiZjFh79HpFGw",
    authDomain: "twitter-clone-react-b855e.firebaseapp.com",
    projectId: "twitter-clone-react-b855e",
    storageBucket: "twitter-clone-react-b855e.appspot.com",
    messagingSenderId: "627619228867",
    appId: "1:627619228867:web:39d6a906772f0d4c3d0676",
    measurementId: "G-ZZEPJNLRJZ"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;