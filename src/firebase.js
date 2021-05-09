import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1bpxLdEayvUUC1n3Nc7nxTFlXb1u2cqg",
    authDomain: "megamind-netflix.firebaseapp.com",
    projectId: "megamind-netflix",
    storageBucket: "megamind-netflix.appspot.com",
    messagingSenderId: "640865242158",
    appId: "1:640865242158:web:0ad72eca87b2365bd523bf",
    measurementId: "G-TMPQTVXCB3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;