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
    }, 1200);
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
        
        
        currentFilter = "all"
        
        document.querySelectorAll(".filter-tab")
            .forEach(t => t.classList.remove("active"))

        document.querySelector('[data-filter="all"]')
            .classList.add("active")
        updateTheList('all')
    })
}
addBtn.addEventListener('click', addToList)
// -----------------------------------

let unsubscribe = null
let currentFilter = "all"


function updateTheList(filter = "all") {
    if (unsubscribe) unsubscribe()
    currentFilter = filter 

    let q
    if (filter === 'all') {
        q = query(listRef, orderBy('createdAt', 'desc'))
    } else {
        q = query(
            listRef,
            where('category', '==', filter)
        )
    }


    unsubscribe = onSnapshot(q, function (snapshot) {
        listDiv.innerHTML = ''


        if (snapshot.empty) {
            listDiv.innerHTML = `
                <div class="empty-placeholder">
                    <i data-lucide="package-open" size="32"></i>
                    <p>No items found.<br>Your list is feeling lonely!</p>
                </div>
            `;
        } else {
            snapshot.forEach((docSnap) => {
                let data = docSnap.data()
                let id = docSnap.id

                let itemDiv = document.createElement('div')
                itemDiv.classList.add('item-row')

                if (data.bought) itemDiv.classList.add('bought')

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


                // Item Bought
                itemDiv.addEventListener('dblclick', () => {
                    boughtItem(docSnap.id, data.bought)
                })


                // EDIT ITEM
                let editBtn = itemDiv.querySelector('.btn-edit')
                editBtn.addEventListener('click', () => itemEdited(id, data.name))

                // DELETE ITEM
                let delBtn = itemDiv.querySelector('.btn-del')
                delBtn.addEventListener('click', () => itemDeleted(id))
            })
        }

        lucide.createIcons()
    })
}
updateTheList()
// -----------------------------------------------------------------------


function boughtItem(id, status) {
    updateDoc(doc(db, "shopping_items", id), { bought: !status })
        .then(() => showPeek(!status ? "Bought!" : "Returned", "bought-st"))
}
// ---------------------------------------------------------


function itemEdited(id, oldName) {
    currentEditId = id
    modalInput.value = oldName
    modal.classList.remove("hidden")
}

function saveModal() {
    if (!modalInput.value.trim() || !currentEditId) return;

    updateDoc(doc(db, "shopping_items", currentEditId), { name: modalInput.value.trim() })
        .then(() => {
            modal.classList.add('hidden')
            showPeek("Updated!", "edit")
        })
}
modalSave.addEventListener("click", saveModal)
// ---------------------------------------------------------


function itemDeleted(id) {
    deleteDoc(doc(db, "shopping_items", id))
    .then(() => showPeek("Deleted!", "del"));
}
// ---------------------------------------------------------


document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener('click', () => {
        document.querySelectorAll(".filter-tab").forEach((t) => {t.classList.remove("active")})

        tab.classList.add('active')

        currentFilter = tab.dataset.filter
        updateTheList(currentFilter)
    })
})
// ---------------------------------------------------------








lucide.createIcons()


