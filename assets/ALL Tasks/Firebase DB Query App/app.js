import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getFirestore, collection, addDoc, onSnapshot,
    query, where, orderBy, doc, deleteDoc, updateDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyA37Fz9gJ0k9OG9D1VQ82a7mHR6sHBF2sw",
    authDomain: "shopping-list-a71ae.firebaseapp.com",
    projectId: "shopping-list-a71ae",
    storageBucket: "shopping-list-a71ae.firebasestorage.app",
    messagingSenderId: "31851530734",
    appId: "1:31851530734:web:6b5a6f5edc3d41bb5fe6ff"
};


let app = initializeApp(firebaseConfig)
let db = getFirestore(app)
let listRef = collection(db, 'shopping_items')
// -----------------------------------------------------------------------------------------------------


let nameInput = document.getElementById('item-name')
let catInput = document.getElementById('item-cat')
let addBtn = document.getElementById('add-btn')
let listDiv = document.getElementById('list')
let statusPeek = document.getElementById('status-peek');


let modal = document.getElementById('edit-modal');
let modalInput = document.getElementById('modal-input');
let modalSave = document.getElementById('modal-save');

let currentEditId = null
// ---------------------------------------------------------

function showPeek(msg, type) {
    statusPeek.textContent = msg
    statusPeek.className = `status-peek active ${type}`

    setTimeout(() => {
        statusPeek.classList.remove('active')
    }, 1000);
}
// ---------------------------------


function addToList() {
    if (!nameInput.value.trim()) return;


    addDoc(listRef, {
        name: nameInput.value.trim(),
        category: catInput.value,
        createdAt: serverTimestamp(),
        bought: false
    }).then(() => {
        showPeek('Item Added!', 'add')
        nameInput.value = ''
    })
}
addBtn.addEventListener('click', addToList)
// -----------------------------------


function updateTheList() {
    let q = query(listRef, orderBy('createdAt', 'desc'))


    onSnapshot(q, function (snapshot) {
        listDiv.innerHTML = ''
        snapshot.forEach((docSnap) => {
            let data = docSnap.data()
            let id = docSnap.id

            let itemDiv = document.createElement('div')
            itemDiv.className = `item-row ${data.bought ? 'bought' : ''}`
            // itemDiv.addEventListener('dblclick', () => {
            //     window.toggleItem(docSnap.id, data.bought)
            // })

            itemDiv.innerHTML = `
                <div class="item-info">
                    <span class="item-name">${data.name}</span>
                    <span class="item-meta">${data.category}</span>
                </div>
                <div class="actions">
                    <button class="action-btn btn-edit">
                        <i data-lucide="edit-3"></i>
                    </button>
                    <button class="action-btn btn-del">
                        <i data-lucide="x"></i>
                    </button>
                </div>
            `
            listDiv.appendChild(itemDiv)


            // EDIT ITEM
            let editBtn = itemDiv.querySelector('.btn-edit')
            editBtn.addEventListener('click', () => itemEdited(id))

            // DELETE ITEM
            let delBtn = itemDiv.querySelector('.btn-del')
            delBtn.addEventListener('click', () => itemDeleted(id))
        })
        lucide.createIcons()


    })


}
updateTheList()




function itemEdited(id) {
    console.log('EDIT ITEM ID:', id);
}

function itemDeleted(id) {
    console.log('DELETE ITEM ID:', id);
}










lucide.createIcons()


