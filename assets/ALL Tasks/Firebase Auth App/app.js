import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, RecaptchaVerifier,
    signInWithPhoneNumber, onAuthStateChanged, signOut
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

let status = document.getElementById("status");

let otpCont = document.getElementById("otp-cont");

let signup = document.getElementById("signup");
let login = document.getElementById("login");
let Glogin = document.getElementById("googlelogin");
let optSend = document.getElementById("send");
let verify = document.getElementById("verify");

// ----------------------------------------------------------

function statusMSG(msg, isError = false) {
    status.textContent = msg;
    status.classList.remove("hidden", "error", "success");
    status.classList.add(isError ? "error" : "success");

    setTimeout(() => {
        status.classList.add("hidden");
        status.classList.remove("error", "success");
    }, 5500);
}


function handleError(err) {
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
    if (!email || !password) return statusMSG("Credentials required", true)

    createUserWithEmailAndPassword(auth, email, password)

        .then(() => statusMSG("Registration complete!"))
        .catch((err) => handleError(err))
}
signup.addEventListener("click", signUp)


let logIn = () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (!email || !password) return statusMSG("Credentials required", true)

    signInWithEmailAndPassword(auth, email, password)

        .then(() => statusMSG("Logged in!", false))
        .catch((err) => handleError(err))
}
login.addEventListener("click", logIn)

// ----------------------------------------------------------



let recaptcha = new RecaptchaVerifier(auth, "recaptcha", { 'size': 'normal' })

let sendOPT = () => {
    let phone = document.getElementById("phone").value
    if (!phone) return statusMSG("Enter phone number", true)

    signInWithPhoneNumber(auth, phone, recaptcha)
        .then(result => {
            window.confirmation = result
            statusMSG("Code sent successfully", false)
            otpCont.classList.remove("hidden")
        })
        .catch(err => handleError(err))
}
optSend.addEventListener("click", sendOPT)


let verifyOTP = () => {
    let otp = document.getElementById("otp").value

    confirmation.confirm(otp)
        .then(() => {
            statusMSG("Logged in!", false)
            otpCont.classList.add("hidden")
            phone.value = ""
        })
        .catch((err) => statusMSG("Code validation failed", true))
}
verify.addEventListener("click", verifyOTP)
// -----------------------------------------------------------------------



let formCont = document.getElementById("form-container")
let welcomeCont = document.getElementById("welcome-cont")
let userInfo = document.getElementById("user-info")

onAuthStateChanged(auth, user => {
    // console.log(user);
    if(user){
        formCont.classList.add('hidden')
        welcomeCont.classList.remove('hidden')
        userInfo.innerText = user.email || user.phoneNumber
    }else{
        formCont.classList.remove('hidden');
        welcomeCont.classList.add('hidden')
    }

})
// -----------------------------------------------------------------------



let logOutBtn = document.getElementById("logout-btn")

let logOut = () => {
    let currentUser = auth.currentUser;
    if (!currentUser) return statusMSG("No user logged in", true);

    let identifier = currentUser.email || currentUser.phoneNumber || "Unknown";

    signOut(auth)
        .then(() => {
            statusMSG(`${identifier}, logged out`, false);
        })
        .catch(err => {
            statusMSG("Logout failed", true);
        });
}

logOutBtn.addEventListener("click", logOut)






