let chatBotBrain = [
    { category: "Greeting", keywords: ["hi", "hello", "hey", "hola"], response: "Oh, hey! How can I help you today?" },
    { category: "Status Check", keywords: ["how are you", "What's up?", "how's it going", "sup"], response: "I'm just a simple array-based bot, but I'm ready to chat! What's up?" },
    { category: "Weather", keywords: ["weather", "temperature", "sun"], response: "I can't check the weather, but I hope it's sunny where you are!" },
    { category: "Goodbye", keywords: ["bye", "goodbye", "later", "cya"], response: "See you later! Come back if you have any more simple questions." },
    { category: "Identity", keywords: ["name", "who are you"], response: "I don't have a name, but you can call me ChatBot." },
    { category: "Help", keywords: ["help", "assist"], response: "To get help, try using keywords like 'hi', 'weather', or 'bye'." },
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
    helpBOX.classList.remove("hidden");
    helpBOX.classList.add("show");
    renderKeywordsList();
});
helpBoxLink.addEventListener("click", function(){
    helpBOX.classList.remove("show");
    helpBOX.classList.add("hidden");
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




sendBtn.addEventListener("click", sendMSG);

userInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        sendMSG();
    }
});



















