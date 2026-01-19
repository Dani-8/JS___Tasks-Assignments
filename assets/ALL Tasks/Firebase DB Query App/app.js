import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getFirestore, collection, addDoc, onSnapshot,
    query, where, orderBy, doc, deleteDoc, updateDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyA37Fz9gJ0k9OG9D1VQ82a7mHR6sHBF2sw",
    authDomain: "shopping-list-a71ae.firebaseapp.com",
    projectId: "shopping-list-a71ae",
    storageBucket: "shopping-list-a71ae.firebasestorage.app",
    messagingSenderId: "31851530734",
    appId: "1:31851530734:web:6b5a6f5edc3d41bb5fe6ff"
};


let app = initializeApp(firebaseConfig)
let db = getFirestore(app)
let listRef = collection(db, 'shopping_items')
// -----------------------------------------------------------------------------------------------------


let nameInput = document.getElementById('item-name')
let catInput = document.getElementById('item-cat')
let addBtn = document.getElementById('add-btn')
let listDiv = document.getElementById('list')

let editBtn = document.getElementById('edit-btn')
let delBtn = document.getElementById('del-btn')

let currentEditId = null
// ---------------------------------------------------------

function addToList() {
    if (!nameInput.value.trim()) return;

    addDoc(listRef, {
        name: nameInput.value.trim(),
        category: catInput.value,
        createdAt: serverTimestamp(),
        bought: false
    }).then(() => { 
        nameInput.value = ''
    })

}





















lucide.createIcons()