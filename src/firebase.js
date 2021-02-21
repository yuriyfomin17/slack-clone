import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9VYlDRkv3xrekV8Hjb0rEniCfSeOEZOw",
    authDomain: "slack-clone-6f7d5.firebaseapp.com",
    projectId: "slack-clone-6f7d5",
    storageBucket: "slack-clone-6f7d5.appspot.com",
    messagingSenderId: "247496428872",
    appId: "1:247496428872:web:223438490e15fc0737f77d",
    measurementId: "G-RHVMPSEZ5B"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()