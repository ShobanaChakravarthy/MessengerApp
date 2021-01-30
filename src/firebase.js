import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBziQGtD4G9R9mjhpeqeNt-oCanxsslSUY",
    authDomain: "messenger-clone-7fe30.firebaseapp.com",
    projectId: "messenger-clone-7fe30",
    storageBucket: "messenger-clone-7fe30.appspot.com",
    messagingSenderId: "207106306288",
    appId: "1:207106306288:web:561b429bd850358300d235",
    measurementId: "G-LYNTTR214S"
});
// the firebaseApp which we initialized above, using that we can use it get firestore which will have all the data
// we are storing it in a variable called db and we are exporting it

const db=firebaseApp.firestore();
export default db;