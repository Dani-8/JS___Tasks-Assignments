import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {
    getFirestore, collection, addDoc, getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDsVE9xTKPn7o1D62o6bYQbaU50cpoHAQ0",
    authDomain: "todo-app-a0af0.firebaseapp.com",
    projectId: "todo-app-a0af0",
    storageBucket: "todo-app-a0af0.firebasestorage.app",
    messagingSenderId: "684107818674",
    appId: "1:684107818674:web:f5b4eac638e97b6631cbab",
    measurementId: "G-2L5YZH98DC"
}

let app = initializeApp(firebaseConfig)
let db = getFirestore(app)
