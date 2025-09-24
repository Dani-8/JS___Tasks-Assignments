let daysLeft = document.getElementById("days-left")
let displayDays = document.getElementById("display-days")
let note = document.getElementById("note")
let toggleButton = document.getElementById("toggle-btn")

let detailed = false

function calculateDaysLeft(){   
    let ramzanStartDate = new Date("Feb 17, 2026 00:00:00")
    let today = new Date()
    
    let differenceInTime = ramzanStartDate.getTime() - today.getTime()
    let differenceInDay = Math.ceil(differenceInTime / (1000 * 3600 * 24))
    


    if(differenceInDay <= 0){
        displayDays.textContent = "Ramadan Mubarak!..."
        daysLeft.classList.add("hidden")
        toggleButton.classList.add("hidden")
        note.classList.add("hidden")
        return
    }


    if(detailed){
        let years = Math.floor(differenceInDay / 365)
        let months = Math.floor((differenceInDay % 365) / 30)
        let days = (differenceInDay % 365) % 30

        displayDays.innerHTML = `
        ${years > 0 ? `<span>${years} <small>Years</small></span>` : ''}
        ${months > 0 ? `<span>${months} <small>Months</small></span>` : ''}
        ${days > 0 ? `<span>${days} <small>Days</small></span>` : ''}
        `
    }else{
        displayDays.textContent = `${differenceInDay} Days`
    }
}


toggleButton.addEventListener("click", () => {
    detailed = !detailed
    if(detailed){
        toggleButton.textContent = 'Show Simple Countdown';
    }else {
        toggleButton.textContent = 'Show Detailed Countdown';
    }
    calculateDaysLeft()
})
    


// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

let passwordDisplay = document.getElementById("password-display")
let copyButton = document.getElementById("copy-btn")

let lengthValue = document.getElementById("length-value")
let lengthSlider = document.getElementById("length-slider")

let inculudeUppercase = document.getElementById("include-uppercase")
let inculudeLowercase = document.getElementById("include-lowercase")
let inculudeNumbers = document.getElementById("include-numbers")
let inculudeSymbols = document.getElementById("include-symbols")

let includeNameInput = document.getElementById("include-name-input")
let inculudeNumbersInput = document.getElementById("include-numbers-input")
let nameInput = document.getElementById("name-input")
let numberInput = document.getElementById("number-input")

let generateButton = document.getElementById("generate-btn")

let strengthBar = document.getElementById("strength-bar")
let strengthText = document.getElementById("strength-text")

let toast = document.getElementById("toast")

let character = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    Symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
}



// GENERATE PASSWORD
function generatePassword(){
    let length = parseInt(lengthSlider.value)
    let characterPool = ""
    let newPassword = ""
    let hasAtLeastOneOfEach = ""


    if(inculudeUppercase.checked){
        characterPool += character.uppercase
        hasAtLeastOneOfEach += character.uppercase[Math.floor(Math.random() * character.uppercase.length)]
    }
    if(inculudeLowercase.checked){
        characterPool += character.lowercase
        hasAtLeastOneOfEach += character.lowercase[Math.floor(Math.random() * character.lowercase.length)]
    }
    if(inculudeNumbers.checked){
        characterPool += character.numbers
        hasAtLeastOneOfEach += character.numbers[Math.floor(Math.random() * character.numbers.length)]
    }
    if(inculudeSymbols.checked){
        characterPool += character.Symbols
        hasAtLeastOneOfEach += character.Symbols[Math.floor(Math.random() * character.Symbols.length)]
    }


    if(includeNameInput.checked && nameInput.value.length > 0){
        let name = nameInput.value  
        hasAtLeastOneOfEach += name.toUpperCase() + name.toLowerCase()
        characterPool += name.toUpperCase() + name.toLowerCase()
    }
    if(inculudeNumbersInput.checked && numberInput.value.length > 0){
        let numberStr = numberInput.value.replace(/\D/g, "")// Remove non-digits
        hasAtLeastOneOfEach += numberStr
        characterPool += numberStr
    }


    if(characterPool === ""){
        passwordDisplay.textContent = 'Please select at least one character type.'
        updateStrength("")
        return
    }



    // Fill the rest of the password up to the requested length
    let remainingLength = length - hasAtLeastOneOfEach.length;
    if (remainingLength < 0) remainingLength = 0; // Prevent negative length

    for(let i = hasAtLeastOneOfEach.length; i < length; i++){
        newPassword += characterPool.charAt(Math.floor(Math.random() * characterPool.length))
    }

    

    newPassword = shuffleString(newPassword + hasAtLeastOneOfEach)
    // Ensure the final password is exactly the requested length
    newPassword = newPassword.slice(0, length);

    passwordDisplay.textContent = newPassword
    updateStrength(newPassword)
}



// CHANGING PASSWORD IF ITEMS ARE CHHECKED OR NOT
[inculudeUppercase, inculudeLowercase, inculudeNumbers, inculudeSymbols, includeNameInput, inculudeNumbersInput, nameInput, numberInput].forEach(element => {
    element.addEventListener("change", generatePassword)
    element.addEventListener("input", generatePassword)
})

// NEW PASSWORD GENERATE ON CLICK
generateButton.addEventListener("click", generatePassword)



// UPDATE STRENGTH BAR
function updateStrength(password){
    let score = 0 
    let length = password.length
    let hasUppercase = /[A-Z]/.test(password)
    let hasLowercase = /[a-z]/.test(password)
    let hasNumber = /[0-9]/.test(password)
    let hasSymbol = /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password)

    // SCORE BASED ON LENGTH
    score += (length - 6) * 5 // (6 is value based on length slider) & 5 points for each character above 6

    // SCORE BASED ON CHARACTER TYPES
    if(hasUppercase) score += 10
    if(hasLowercase) score += 10
    if(hasNumber) score += 10
    if(hasSymbol) score += 10

    // Cap the score
    score = Math.min(100, score);
    score = Math.max(0, score);


    let color = "rgb(215, 3, 3)"
    let text = "Weak"
    if(score > 50){
        color = "rgb(255, 153, 0)"
        text = "Medium"
    }
    if(score > 80){
        color = "rgb(0, 139, 0)"
        text = "Strong"
    }
    strengthBar.style.width = score + "%"
    strengthBar.style.backgroundColor = color
    strengthText.style.color = color
    strengthText.textContent = text

}

// UPDATE PASSWORD LENGTH
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value
    generatePassword()
    updateStrength(passwordDisplay.textContent)
})




/**
 * TAKE STRING AND SPLIT IT
 * SWAP EACH CHAR ONE BY ONE
 * AND JOIN THEM
 */
function shuffleString(str){
    let array = str.split("")
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }

    return array.join("")
}


// COPY THE PASSWORD
copyButton.addEventListener("click", () => {
    let password = passwordDisplay.textContent
    console.log(password);
    
    if(password !== "" && password !== 'Please select at least one character type.'){
        navigator.clipboard.writeText(password).then(() => {
            toast.classList.add("show")
            setInterval(() => {
                toast.classList.remove("show")
            }, 1500);
        })
    }
})





document.addEventListener("DOMContentLoaded", () => {
    calculateDaysLeft()
    generatePassword()
    setInterval(calculateDaysLeft, 1000);
});

