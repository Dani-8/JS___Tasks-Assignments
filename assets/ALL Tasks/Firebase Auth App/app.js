import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"


let firebaseConfig = {
    apiKey: "AIzaSyBuXg9eeRAWv0fvlXpwWS0vB4q8yKxTsYI",
    authDomain: "sign-up-95910.firebaseapp.com",
    projectId: "sign-up-95910",
    storageBucket: "sign-up-95910.firebasestorage.app",
    messagingSenderId: "214140776062",
    appId: "1:214140776062:web:820a6ba8b39b7d3430b22f",
    measurementId: "G-NW36HSZ3DL"
};


let app = initializeApp(firebaseConfig)
let auth = getAuth(app)

// =================================================================================================

let email = document.getElementById("email");
let password = document.getElementById("password");
let phone = document.getElementById("phone");
let otp = document.getElementById("otp");
let status = document.getElementById("status");

let signup = document.getElementById("signup");
let login = document.getElementById("login");
let Glogin = document.getElementById("googlelogin");
// ----------------------------------------------------------

// ----------------------------------------------------------

let signUp = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)

    .then(() => status.textContent = "Signed up!")
    .catch((err) => alert(err.message))
}
signup.addEventListener("click", signUp)


let logIn = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)

    .then(() => status.textContent = "Log in!")
    .catch((err) => alert(err.message))
}
login.addEventListener("click", logIn)






















