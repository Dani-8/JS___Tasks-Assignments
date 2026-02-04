import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, query, where, doc, deleteDoc, updateDoc, serverTimestamp, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyA37Fz9gJ0k9OG9D1VQ82a7mHR6sHBF2sw",
    authDomain: "shopping-list-a71ae.firebaseapp.com",
    projectId: "shopping-list-a71ae",
    storageBucket: "shopping-list-a71ae.firebasestorage.app",
    messagingSenderId: "31851530734",
    appId: "1:31851530734:web:6b5a6f5edc3d41bb5fe6ff"
}


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const ADMIN_EMAIL = "admin@gmail.com"


let currentUser = null
let currentItems = []
let globalItems = []
let charts = {}
let isloginMode = true
let selectedUserUid = null
// ======================================================
// ======================================================
// ======================================================








































lucide.createIcons()