let msgBOX = document.getElementById("msgbox")

let formCont = document.getElementById("form-cont")
let formTitle = document.getElementById("formTitle")
let nameField = document.getElementById("name-field")
let nameInput = document.getElementById("name-input")
let emailInput = document.getElementById("email-input")
let passwordInput = document.getElementById("pasword-input")
let submitBTN = document.getElementById("submit-btn")
let linkBTN = document.getElementById("link-btn")

let profileView = document.getElementById("profile-view")
let username = document.getElementById("username")
let useremail = document.getElementById("useremail")
let logoutBTN = document.getElementById("logout-btn")



let isSignUp = false;
let currentUser = null;
let msgTimer = null;
// ================================================================

function showMSG(text, isError){
    if(msgTimer){
        clearTimeout(msgTimer)
    }
    // --------------------------

    msgBOX.textContent = text
    msgBOX.classList.remove('hidden', 'msg-error', 'msg-success')

    if(isError){
        msgBOX.classList.add("msg-error")
        msgTimer = setTimeout(() => msgBOX.classList.add('hidden'), 4000)
    }else{
        msgBOX.classList.add("msg-success")
        msgTimer = setTimeout(() => msgBOX.classList.add('hidden'), 4000)
    }
}

function hideMSG(){
    if(msgTimer){
        clearTimeout(msgTimer)
    }

    msgBOX.classList.add('hidden')
}
// ==================================================================================

function toggleMode(){
    isSignUp = !isSignUp
    hideMSG()

    if(isSignUp){
        formTitle.textContent = 'Sign Up'
        submitBTN.textContent = 'Create Account'
        linkBTN.textContent = 'Already have an account? Log In'
        nameField.classList.remove('hidden')
        nameInput.focus();
    }else{
        formTitle.textContent = 'Log In'
        submitBTN.textContent = 'Log In'
        linkBTN.textContent = 'Need an account? Sign Up'
        nameField.classList.add('hidden')
        emailInput.focus();
    }
}

linkBTN.addEventListener("click", toggleMode)
// ==================================================================================
























