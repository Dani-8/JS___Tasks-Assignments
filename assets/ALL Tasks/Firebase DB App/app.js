import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {
    getFirestore, collection, addDoc, getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDsVE9xTKPn7o1D62o6bYQbaU50cpoHAQ0",
    authDomain: "todo-app-a0af0.firebaseapp.com",
    projectId: "todo-app-a0af0",
    storageBucket: "todo-app-a0af0.firebasestorage.app",
    messagingSenderId: "684107818674",
    appId: "1:684107818674:web:f5b4eac638e97b6631cbab",
    measurementId: "G-2L5YZH98DC"
}

let app = initializeApp(firebaseConfig)
let db = getFirestore(app)

// =====================================================================================================
// =====================================================================================================
// =====================================================================================================

let todoInput = document.getElementById("todo-input")
let status = document.getElementById("status")
let addBTN = document.getElementById("add-todo-btn")


function addTodo(){
    let todoInputValue = todoInput.value
    
    if(!todoInputValue){
        status.textContent = "Todo cannot be empty"
        status.classList.remove("hidden")
        status.classList.add("red")


        setTimeout(() => {
            status.classList.add("hidden");
            status.classList.remove("red");
        }, 4000)

        return
    }
    // -----------------------------------------------------

    addDoc(collection(db, "todos"),{
        text: todoInputValue
    })
        .then(() => {
            status.textContent = "Todo added"
            status.classList.remove("hidden")
            status.classList.add("green")
            todoInput.value = ""
            loadTodo()

            setTimeout(() => {
                status.classList.add("hidden");
                status.classList.remove("green");
            }, 4000)
        })
        .catch(() => {
            status.textContent = "Error adding todo"
            status.classList.remove("hidden")
            status.classList.add("red")


            setTimeout(() => {
                status.classList.add("hidden");
                status.classList.remove("red");
            }, 4000)
        })


}
addBTN.addEventListener("click", addTodo)


function loadTodo(){
    let list = document.getElementById("list")
    list.innerHTML = ""

    getDocs(collection(db, "todos"))
        .then(result => {
            result.forEach(doc => {
                let li = document.createElement("li")
                li.textContent = doc.data().text
                list.appendChild(li)
            })
        })
}
loadTodo()