import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAE3poXSHEVmPR0mTmkT35ZY8bpDQC5I_o",
    authDomain: "shoplister-e3a1a.firebaseapp.com",
    projectId: "shoplister-e3a1a",
    storageBucket: "shoplister-e3a1a.appspot.com",
    messagingSenderId: "385608950711",
    appId: "1:385608950711:web:587ad58032c3dee57bfe32"
  };

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
    window.location.reload()
}

export function checkAuth(cb) {
    return auth.onAuthStateChanged(cb);
}

export async function logOut() {
    await auth.signOut();
    window.location.reload();
}
