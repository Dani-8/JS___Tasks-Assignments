let chatBotBrain = [
    { category: "Greeting", keywords: ["hi", "hello", "hey", "hola"], response: "Oh, hey! What's new with you?" },
    { category: "Status Check", keywords: ["how are you", "how's it going", "sup"], response: "I'm running smoothly, thanks for asking! What can I search for?" },
    { category: "Information Request", keywords: ["weather", "temperature", "sun"], response: "I can't check the current weather, but I hope your day is fantastic!" },
    { category: "Farewell", keywords: ["bye", "goodbye", "later", "cya"], response: "Talk to you later! Don't hesitate to come back." },
    { category: "Identity", keywords: ["name", "who are you"], response: "I am a simple array-based keyword bot, designed for quick replies." },
    { category: "Fun Fact", keywords: ["joke", "funny"], response: "Why don't scientists trust atoms? Because they make up everything!" },
    { category: "Command", keywords: ["help", "assist"], response: "Try asking about 'jokes', saying 'hello', or asking 'how are you?'" },
    { category: "Acknowledgement", keywords: ["thanks", "thank you", "kudos"], response: "You're very welcome! Happy to help." },
]

let defaultResponse = "Hmm, I didn't catch that. I only understand simple keywords right now. Try something easy!";


let userInput = document.getElementById("user-input");  
let chatHistory = document.getElementById("chat-history");
let sendBtn = document.getElementById("send-btn");

let helpBoxLink = document.getElementById("help-box-link");
let helpBOX = document.getElementById("help-box");
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
    if (helpBOX.classList.contains("hidden")){
        helpBOX.classList.remove("hidden");
        helpBOX.classList.add("show");
        renderKeywordsList();
    }else{
        helpBOX.classList.remove("show");
        helpBOX.classList.add("hidden");
    }
});



function sendMSG(){
    let userText = userInput.value.trim();
    if(userText !== ""){
        displayUserMSG(userText, "user");
        userInput.value = "";
        userInput.focus();

        setTimeout(() => {
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



















