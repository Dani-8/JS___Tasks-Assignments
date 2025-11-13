let msgBOX = document.getElementById("msgbox")

let formCont = document.getElementById("form-cont")
let formTitle = document.getElementById("formTitle")
let nameField = document.getElementById("name-field")
let nameInput = document.getElementById("name-input")
let emailInput = document.getElementById("email-input")
let passwordInput = document.getElementById("password-input")
let submitBTN = document.getElementById("submit-btn")
let linkBTN = document.getElementById("link-btn")

let profileView = document.getElementById("profile-view")
let userName = document.getElementById("username")
let userEmail = document.getElementById("useremail")
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
    // use msg-hidden (message-specific) so we don't touch the global .hidden used elsewhere
    msgBOX.classList.remove('msg-hidden', 'msg-error', 'msg-success')

    if(isError){
        msgBOX.classList.add("msg-error")
        msgTimer = setTimeout(() => msgBOX.classList.add('msg-hidden'), 4000)
    }else{
        msgBOX.classList.add("msg-success")
        msgTimer = setTimeout(() => msgBOX.classList.add('msg-hidden'), 4000)
    }
}

function hideMSG(){
    if(msgTimer){
        clearTimeout(msgTimer)
    }

    msgBOX.classList.add('msg-hidden')
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

function handleSubmit(){
    let name = nameInput.value
    let email = emailInput.value
    let pass = passwordInput.value
    let key = "user_" + email.toLowerCase()

    hideMSG()

    if (!email || !pass || (isSignUp && !name)) {
        return showMSG('Please fill all fields', true);
    }

    if(isSignUp){
        if(pass.length < 6){
            return showMSG('Password must be at least 6 characters', true);
        }
        if (localStorage.getItem(key)) {
            return showMSG('Account already exists. Try logging in', true);
        }

        let user = {name: name, password: pass, email: email}
        localStorage.setItem(key, JSON.stringify(user))
        currentUser = user
        showView()
    }else{
        let data = localStorage.getItem(key)
        if(!data){
            return showMSG('No account found. Please sign up', true);
        }

        let user = JSON.parse(data)

        if(user.password === pass){
            currentUser = { name: user.name, email: user.email};
            showView();
        }else{
            showMSG('Invalid email or password', true);
        }
    }
}

submitBTN.addEventListener("click", handleSubmit)
// ==================================================================================


function logout(){
    currentUser = null;
    showView();
}

logoutBTN.addEventListener("click", logout)
// ==================================================================================


function showView(){
    if(currentUser){
        hideMSG();
        formCont.classList.add('hidden');
        profileView.classList.remove('hidden');
        userName.textContent = currentUser.name;
        userEmail.textContent = currentUser.email;
    }else{
        formCont.classList.remove('hidden');
        profileView.classList.add('hidden');
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        hideMSG();
    }
}


showView()
















