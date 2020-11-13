import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.default.initializeApp({
    apiKey: "AIzaSyBa6vR9Nza0tQXgUreF8un_FX3f6FExrP0",
    authDomain: "godseye-e56ca.firebaseapp.com",
    databaseURL: "https://godseye-e56ca.firebaseio.com",
    projectId: "godseye-e56ca",
    storageBucket: "godseye-e56ca.appspot.com",
    messagingSenderId: "333342456277",
    appId: "1:333342456277:web:1a348e2b85fa13f7e5655c",
    measurementId: "G-TBR0JC11DN"
});

export default app;