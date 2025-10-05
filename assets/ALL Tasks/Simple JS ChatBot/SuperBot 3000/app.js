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


let userInput = document.getElementById("user-input");  
let chatHistory = document.getElementById("chat-history");
let sendBtn = document.getElementById("send-btn");

let helpBoxLink = document.getElementById("help-box-link");
let helpBoxContainer = document.getElementById("help-box-container");
let helpBox = document.getElementById("help-box");
let categoryList = document.getElementById("category-list");
// ------------------------------------------------------------------------------------

// typing indicator container (kept global so it can be removed later)
let typingDiv = null;


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
        displayUserMSG(userText, "user");
        userInput.value = "";
        userInput.focus();

        showTypingEffect();
        setTimeout(() => {
            // removeTypingIndicator();

            let botReply = botResponse(userText)
            displayUserMSG(botReply, "bot");

        }, 1000);
    }
}
sendBtn.addEventListener("click", sendMSG);



function displayUserMSG(msg, sender){
    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-cont");
    let msgBubble = document.createElement("div");
    msgBubble.classList.add("msg-bubble", sender);


    msgBubble.textContent = msg;
    msgContainer.appendChild(msgBubble);
    chatHistory.appendChild(msgContainer);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}



function showTypingEffect(){
    // If there's already a typing indicator, don't create another
    if (typingDiv) return;

    typingDiv = document.createElement("div");
    typingDiv.id = "typing-cont";
    typingDiv.classList.add("typing-cont", "bot", "show");

    typingDiv.innerHTML = `
        <div class="message-bubble bot-bubble">
            <span>Bot is typing</span>
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



















