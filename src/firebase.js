import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgLOSKBPe5BdUvQVmSLoyncpWfy51JT3s",
    authDomain: "drive-clone-47236.firebaseapp.com",
    projectId: "drive-clone-47236",
    storageBucket: "drive-clone-47236.appspot.com",
    messagingSenderId: "854859648627",
    appId: "1:854859648627:web:ca8be10ab889aaf73ee406"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };