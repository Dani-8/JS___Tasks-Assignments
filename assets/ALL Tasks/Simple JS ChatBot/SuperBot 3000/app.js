let chatBotBrain = [
            { 
                keywords: ["hi", "hello", "hey", "hola"], 
                category: "Greeting", 
                response: "Oh, hey! I sensed a friendly greeting. What's on your mind?",
                suggestions: ["How are you?", "Tell me a joke"]
            },
            { 
                keywords: ["how are you","you're good", "how's it going", "sup"], 
                category: "Status Check", 
                response: "I'm running smoothly on JavaScript, thanks for asking! What else can I do for you?",
                suggestions: ["Ask a joke", "What is your name?", "Bye"]
            },
            { 
                keywords: ["joke", "funny"], 
                category: "Fun Fact", 
                response: "Why don't scientists trust atoms? Because they make up everything!",
                suggestions: ["Tell me another joke", "Who are you?", "Thanks"]
            },
            { 
                keywords: ["who are you", "identity", "name"], 
                category: "Identity", 
                response: "I am SuperBot 3000, a simple array-based keyword bot, designed for lightning-fast replies.",
                suggestions: ["How are you?", "Tell me a joke"]
            },
            { 
                keywords: ["weather", "temperature", "sun"], 
                category: "Information Request", 
                response: "I can't check the current weather, but I can guarantee it's sunny in my data center.",
                suggestions: ["Tell me a joke", "Hi"]
            },
            { 
                keywords: ["thanks", "thank you", "kudos"], 
                category: "Acknowledgement", 
                response: "You're very welcome! That's kind of you.",
                suggestions: ["Bye", "Who are you?"]
            },
            { 
                keywords: ["bye", "goodbye", "later", "cya"], 
                category: "Farewell", 
                response: "It was a great conversation! Talk to you later, friend.",
                suggestions: ["Hi", "How are you?"]
            },
        ];


let defaultResponse = [
    "My keyword sensors didn't detect a match. Try a more specific word, like 'joke'!",
    "I'm afraid that message is beyond my current programming. Try checking the help list!",
    "Hmm, I only understand a few topics. Could you rephrase that using one of the accepted keywords?",
    "No match found. This is awkward. Please give me something simple!",
];

let defaultSuggestions = ["Weather", "Tell me a joke", "How are you?"];


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

function loadWindow(){
    chatHistory.innerHTML = ""

    let initialMessage = "Hello! I'm SuperBot 3000, a simple bot. Try saying 'Hi' or asking 'How are you?'"
    displayUserMSG(initialMessage, "bot-cont", "bot");

    renderKeywordsList();
}
window.onload = loadWindow;
// ------------------------------------------------------------------------------------


let newChatBtn = document.getElementById("clearChatButton");
function newChat(){
    helpBoxContainer.classList.add("hidden");
    helpBoxContainer.classList.remove("show");

    loadWindow();
}
newChatBtn.addEventListener("click", newChat);
// ------------------------------------------------------------------------------------

let themeToggleBtn = document.getElementById("themeToggle");
let moonIcon = document.getElementById("moonIcon");
let sunIcon = document.getElementById("sunIcon");

themeToggleBtn.addEventListener("click", function(){
    if(sunIcon.classList.contains("iconHidden")){
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        moonIcon.classList.add("iconHidden");
        sunIcon.classList.remove("iconHidden");
    }else{
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        sunIcon.classList.add("iconHidden");    
        moonIcon.classList.remove("iconHidden");
    }
});



// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
let userInput = document.getElementById("user-input");  
let chatHistory = document.getElementById("chat-history");
let sendBtn = document.getElementById("send-btn");

let helpBoxLink = document.getElementById("help-box-link");
let helpBoxContainer = document.getElementById("help-box-container");
let helpBox = document.getElementById("help-box");
let categoryList = document.getElementById("category-list");
// ------------------------------------------------------------------------------------


function renderKeywordsList(){
    let html = chatBotBrain.map(item => `
            <p class="category-item">
            <span class="category-title">${item.category}:</span> <span class="keywords">${item.keywords.join(", ")}</span>
            </p>
    `).join(``);
    categoryList.innerHTML = html;
}
helpBoxLink.addEventListener("click", function(){
    if (helpBoxContainer.classList.contains("hidden")){
        helpBoxContainer.classList.remove("hidden");
        helpBoxContainer.classList.add("show");
        renderKeywordsList();
    }else{
        helpBoxContainer.classList.remove("show");
        helpBoxContainer.classList.add("hidden");
    }
});



function sendMSG(){
    let userText = userInput.value.trim();
    if(userText !== ""){
        displayUserMSG(userText, "user-cont", "user");
        userInput.value = "";
        userInput.focus();
        
        showTypingEffect();
        setTimeout(() => {
            removeTypingIndicator();

            let botReply = botResponse(userText)
            displayUserMSG(botReply, "bot-cont", "bot");

        }, 1000);
    }
}
sendBtn.addEventListener("click", sendMSG);




function timing(){
    let now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    return now;
}
function displayUserMSG(msg, sendercont, sender){
    let time = timing();
    
    let timingCont = document.createElement("div");
    timingCont.classList.add("time-cont");
    timingCont.textContent = time;

    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-cont", sendercont);
    let msgBubble = document.createElement("div");
    msgBubble.classList.add("msg-bubble", sender);
    msgBubble.textContent = msg;


    msgContainer.appendChild(timingCont);
    msgContainer.appendChild(msgBubble);
    chatHistory.appendChild(msgContainer);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}



function showTypingEffect(){
    typingDiv = document.createElement("div");
    typingDiv.id = "typing-cont";
    typingDiv.classList.add("typing-cont", "bot", "typing-cont-show");

    typingDiv.innerHTML = `
        <div class="bot-bubble bot">
            <span>Typing</span>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>`;

    chatHistory.appendChild(typingDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
function removeTypingIndicator() {
    if (typingDiv) {
        typingDiv.remove();
        typingDiv = null;
    }
}



function botResponse(userText){
    let userTexttoLowerCase = userText.toLowerCase();

    for(let item of chatBotBrain){
        let matching = item.keywords.some(keyword => userTexttoLowerCase.includes(keyword))
        if(matching){
            return item.response;
        }
    }

    return defaultResponse;
}



userInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        sendMSG();
    }
});



















