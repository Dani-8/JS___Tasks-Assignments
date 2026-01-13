import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {
    getFirestore, collection, addDoc, getDocs, onSnapshot, updateDoc, doc, deleteDoc, writeBatch
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


todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTodo();
})
// --------------------------------------------------------------

let emptyState = document.getElementById('empty-state')

onSnapshot(collection(db, 'todos'), function(snapshot){
    list.innerHTML = ""

    if(snapshot.empty){
        emptyState.classList.remove('hidden')
        deleteAllBTN.classList.add('hidden')
    }else{
        emptyState.classList.add('hidden')
        deleteAllBTN.classList.remove('hidden')


        snapshot.forEach((docSnap) => {
            let { text, completed } = docSnap.data()
            let isDone = completed ? 'done' : ''
            
            list.innerHTML += `
                <li class="${isDone}">
                    <span>${text}</span>
                    <span class="li-btns-cont">
                        <button data-id='${docSnap.id}' data-completed="${completed}" class="check-btn"><i data-lucide="check" size="16"></i></button>
                        <button data-id='${docSnap.id}' data-text='${text}' class='edit-btn'><i data-lucide="edit-3" size="16"></i></button>
                        <button data-id='${docSnap.id}' class='delete-btn'><i data-lucide="trash-2" size="16"></i></button>
                    </span>
                </li>
            `
        })
        lucide.createIcons();
    }

    // ----------------------------------------------------------------------------

    // ----------------------------------------------------------------------------

    document.querySelectorAll('#list li button').forEach((btn) => {
        if(btn.classList.contains('edit-btn')){
            btn.addEventListener('click', () => {
                editTodo(btn.dataset.id, btn.dataset.text)
            })
        }else if(btn.classList.contains('delete-btn')){
            btn.addEventListener('click', () => {
                deleteTodo(btn.dataset.id)
            })
        }else if(btn.classList.contains('check-btn')){
            btn.addEventListener('click', () => {
                todoComplete(btn.dataset.id, btn.dataset.completed === 'true')
            })
        }
    })
})
// --------------------------------------------------------------


let modalCont = document.getElementById("modal-cont")
let saveEditBTN = document.getElementById('save-edit')
let modalCancelBTN = document.getElementById('cancel-modal')
let editInput = document.getElementById('edit-input')

let deleteAllBTN = document.getElementById('delete-all')

let currentEditid = null
// ---------------------------------------------------------------

function todoComplete(id, currentStatus){
    updateDoc(doc(db, 'todos', id), { completed: !currentStatus })
}


function deleteAllTodos(){
    getDocs(collection(db, 'todos'))
        .then((snapShot) => {
            let batch = writeBatch(db);

            snapShot.forEach((d) => batch.delete(d.ref))

            batch.commit()
                .then(() => {
                    status.textContent = "All tasks cleared!";
                    status.classList.remove("hidden");
                    status.classList.add("green");

                    setTimeout(() => {
                        status.classList.add("hidden");
                        status.classList.remove("green");
                    }, 4000)
                })
    })
}
deleteAllBTN.addEventListener('click', deleteAllTodos)




function deleteTodo(id){
    deleteDoc(doc(db, 'todos', id))
    .then(() => {
        status.textContent = "Todo is Deleted successfully!"
        status.classList.remove("hidden")
        status.classList.add("green")


        setTimeout(() => {
            status.classList.add("hidden");
            status.classList.remove("green");
        }, 4000)
    })
    .catch(() => {
        status.textContent = "Error deleting todo"
        status.classList.remove("hidden")
        status.classList.add("red")


        setTimeout(() => {
            status.classList.add("hidden");
            status.classList.remove("red");
        }, 4000)
    })
}
// --------------------------------------------------------



function editTodo(id, text){
    currentEditid = id
    editInput.value = text

    modalCont.classList.remove("hidden")
}

function saveEdit(){
    let newtodo = editInput.value.trim()
    if(!newtodo || !currentEditid) return


    updateDoc(doc(db, 'todos', currentEditid), {text: newtodo})
        .then(() => {
            closeModal()

            status.textContent = "Todo is edited successfully!"
            status.classList.remove("hidden")
            status.classList.add("green")


            setTimeout(() => {
                status.classList.add("hidden");
                status.classList.remove("green");
            }, 4000)
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

// ----------------------------------------------------------------


function closeModal(){
    modalCont.classList.add("hidden")
    currentEditid = null
}
modalCancelBTN.addEventListener("click", closeModal)
