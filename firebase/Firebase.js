  import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyCy3LL1jgEEsqnwh2UZRrO1aGgEsQIQx7U",
    authDomain: "appauth-aef9c.firebaseapp.com",
    projectId: "appauth-aef9c",
    storageBucket: "appauth-aef9c.appspot.com",
    messagingSenderId: "518925163195",
    appId: "1:518925163195:web:7da381eb0d1625ab3aa79e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    export default firebase;