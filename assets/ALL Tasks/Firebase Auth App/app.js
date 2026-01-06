import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, RecaptchaVerifier,
    signInWithPhoneNumber,
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

let formCont = document.getElementById("form-container")
let welcomeCont = document.getElementById("welcome-cont")

let status = document.getElementById("status");

let hiddenCont = document.getElementById("hidden-cont");

let signup = document.getElementById("signup");
let login = document.getElementById("login");
let Glogin = document.getElementById("googlelogin");
let optSend = document.getElementById("send");
let verify = document.getElementById("verify");

// ----------------------------------------------------------

function statusMSG(msg, isError = false){
    status.textContent = msg
    status.classList.remove("hidden")
    status.classList.add(`${isError ? false : true}`)

    setTimeout(() => {
        status.classList.add("hidden")
        status.classList.remove(`${isError ? false : true}`)
    }, 5500);
}

function handleError(err){
    let msg = "Connection error"
    if (err.code === 'auth/user-not-found') msg = "Account not found"
    if (err.code === 'auth/wrong-password') msg = "Access denied: check password"
    if (err.code === 'auth/email-already-in-use') msg = "Email already registered"
    if (err.code === 'auth/invalid-email') msg = "Invalid email format"
    statusMSG(msg, true)
}

// ----------------------------------------------------------

let signUp = () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(!email || !password) return statusMSG("Credentials required", true)

    createUserWithEmailAndPassword(auth, email, password)

    .then(() => statusMSG("Registration complete!"))
    .catch((err) => handleError(err))
}
signup.addEventListener("click", signUp)


let logIn = () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(!email || !password) return statusMSG("Credentials required", true)
    
    signInWithEmailAndPassword(auth, email, password)

    .then(() => statusMSG("Logged in!", false))
    .catch((err) => handleError(err))
}
login.addEventListener("click", logIn)

// ----------------------------------------------------------



let recaptcha = new RecaptchaVerifier(auth, "recaptcha", { 'size': 'normal' })

let sendOPT = () => {
    let phone = document.getElementById("phone").value
    if(!phone) return statusMSG("Enter phone number", true)

    signInWithPhoneNumber(auth, phone, recaptcha)
        .then(result => {
            window.confirmation = result
            statusMSG("Code sent successfully", false)
            hiddenCont.classList.remove("hidden")
        })
        .catch(err => handleError(err))
}
optSend.addEventListener("click", sendOPT)


let verifyOTP = () => {
    let otp = document.getElementById("otp").value

    confirmation.confirm(otp)
        .then(() => {
            hiddenCont.classList.add("hidden")
            phone.value = ""
        })
        .catch((err) => statusMSG("Code validation failed", true))
}
verify.addEventListener("click", verifyOTP)














