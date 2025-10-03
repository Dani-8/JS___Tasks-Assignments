let chatBotBrain = [
    { keywords: ["hi", "hello", "hey", "hola"], response: "Oh, hey! How can I help you today?" },
    { keywords: ["how are you", "What's up?", "how's it going", "sup"], response: "I'm just a simple array-based bot, but I'm ready to chat! What's up?" },
    { keywords: ["weather", "temperature", "sun"], response: "I can't check the weather, but I hope it's sunny where you are!" },
    { keywords: ["bye", "goodbye", "later", "cya"], response: "See you later! Come back if you have any more simple questions." },
    { keywords: ["name", "who are you"], response: "I don't have a name, but you can call me ChatBot." },
    { keywords: ["help", "assist"], response: "To get help, try using keywords like 'hi', 'weather', or 'bye'." },
]

let defaultResponse = "Hmm, I didn't catch that. I only understand simple keywords right now. Try something easy!";


let userInput = document.getElementById("user-input");  
let chatArea = document.getElementById("chat-history");
let sendBtn = document.getElementById("send-btn");

// ------------------------------------------------------------------------------------


function sendMSG(){
    let userText = userInput.value.trim();
    if(userText !== ""){
        console.log(userText);
        userInput.value = "";
        userInput.focus();
    }
}

function displayUserMSG(msg, )



sendBtn.addEventListener("click", sendMSG);





















