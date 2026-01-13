import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {
    getFirestore, collection, addDoc, getDocs, onSnapshot, updateDoc, doc
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
let list = document.getElementById("list")




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
// --------------------------------------------------------------


onSnapshot(collection(db, 'todos'), function(snapshot){
    list.innerHTML = ""

    snapshot.forEach((docSnap) => {
        let { text } = docSnap.data()

        list.innerHTML += `
            <li>
                <span>${text}</span>
                <span class="li-btns-cont">
                    <button data-id='${docSnap.id}' data-text='${text}'>Edit</button>
                    <button data-id='${docSnap.id}' >Delete</button>
                </span>
            </li>
        `
    })


    
    document.querySelectorAll('#list li button').forEach((btn) => {
        if(btn.textContent == 'Edit'){
            btn.addEventListener('click', () => {
                editTodo(btn.dataset.id, btn.dataset.text)
            })
        }else{
            btn.addEventListener('click', () => {
                deleteTodo()
            })
        }
    })


    

})
// --------------------------------------------------------------

let modalCont = document.getElementById("modal-cont")
let saveEditBTN = document.getElementById('save-edit')
let modalCancelBTN = document.getElementById('cancel-modal')
let editInput = document.getElementById('edit-input')


let currentEditid = null
// ---------------------------------------------------------------

function editTodo(id, text){
    currentEditid = id
    editInput.value = text

    modalCont.classList.remove("hidden")
    console.log("hi mdal");
}




function saveEdit(){
    let newtodo = editInput.value.trim()
    if(!newtodo || !currentEditid) return


    updateDoc(doc(db, 'todos', currentEditid), {text: newtodo})
        .then(() => {
            closeModal()
        })
        .catch(() => {
            status.textContent = "Error editing todo"
            status.classList.remove("hidden")
            status.classList.add("red")


            setTimeout(() => {
                status.classList.add("hidden");
                status.classList.remove("red");
            }, 4000)
        })
}
saveEditBTN.addEventListener('click', saveEdit)




function closeModal(){
    modalCont.classList.add("hidden")
    currentEditid = null
}
modalCancelBTN.addEventListener("click", closeModal)








