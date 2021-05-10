import firebase from 'firebase';
import 'firebase/auth';

const config = firebase.default.initializeApp({
    apiKey: "AIzaSyA_kq7aSBICUn42RB3VPnPnrpZtCLNvtAs",
    authDomain: "god-s-eye-b94dc.firebaseapp.com",
    databaseURL: "https://god-s-eye-b94dc-default-rtdb.firebaseio.com",
    projectId: "god-s-eye-b94dc",
    storageBucket: "god-s-eye-b94dc.appspot.com",
    messagingSenderId: "87925896858",
    appId: "1:87925896858:web:299a3e05e7850651fb1123",
    measurementId: "G-126PWQ4RL1"
});

export const auth = firebase.auth();
export default config;
