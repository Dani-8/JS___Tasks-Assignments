import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getFirestore, collection, getDocs, addDoc, onSnapshot,
    query, where, orderBy, doc, deleteDoc, updateDoc,
    serverTimestamp, writeBatch
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

lucide.createIcons()
// -----------------------------------------------------------------------------------------------------



// ------------------------------------------

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




// ---------------------------------------------------------
function showPeek(msg, type) {
    statusPeek.textContent = msg
    statusPeek.className = `status-peek active ${type}`

    setTimeout(() => {
        statusPeek.classList.remove('active')
    }, 1500);
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

let currentFilter = "all"

function sync() {
    let q = query(listRef, orderBy('createdAt', 'desc'))

    onSnapshot(q, (snapshot) => {
        allitems = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
        updateTheList(currentFilter)
        updateStatsUI()
    })

}
// --------------------------------------------------------------------

function updateTheList(filter = "all") {
    listDiv.innerHTML = ''

    let filtered = filter === "all" ? allitems : allitems.filter(i => i.category === filter)
    document.getElementById('total-count').textContent = `${filtered.length}`


    if (filtered.length == 0) {
        listDiv.innerHTML = `
                <div class="empty-placeholder">
                    <i data-lucide="package-open" size="32"></i>
                    <p>No items found.<br>Your list is feeling lonely!</p>
                </div>
            `;
    }else{
        filtered.forEach((item) => {
            let itemDiv = document.createElement('div')
            itemDiv.classList.add('item-row')

            if (item.bought) itemDiv.classList.add('bought')

            itemDiv.innerHTML = `
                    <div class="item-info">
                        <span class="item-name">${item.name}</span>
                        <span class="item-meta">${item.category}</span>
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
                boughtItem(item.id, item.bought)
            })


            // EDIT ITEM
            let editBtn = itemDiv.querySelector('.btn-edit')
            editBtn.addEventListener('click', () => itemEdited(item.id, item.name))

            // DELETE ITEM
            let delBtn = itemDiv.querySelector('.btn-del')
            delBtn.addEventListener('click', () => itemDeleted(item.id))
        })
    }

    lucide.createIcons()
}
// -----------------------------------------------------------------------


// ---------------------------------------------------------
let headerTitle = document.getElementById("title")

let menuBTN = document.getElementById("menu-toggle")

let mainMenu = document.getElementById("main-menu")
let navList = document.getElementById("nav-list")
let navStats = document.getElementById("nav-stats")
let clearBoughtBTN = document.getElementById("clear-bought-btn")

let listViewCont = document.getElementById('view-list-cont')
let statsViewCont = document.getElementById('view-stats-cont')
// ------------------------------------------------------------------

/**
     * OPEN THE MENU
*/
function openMenu(e) {
    e.stopPropagation()
    mainMenu.classList.toggle("hidden")
}
menuBTN.addEventListener("click", openMenu)

document.addEventListener("click", () => {
    mainMenu.classList.add("hidden")
});
// ------------------------------------------

/**
     * SWITCH THE VIEW
*/
function switchView(view) {
    listViewCont.classList.add("hidden")
    statsViewCont.classList.add("hidden")

    listViewCont.classList.remove("view-anim")
    statsViewCont.classList.remove("view-anim")


    if (view == "list") {
        headerTitle.textContent = "Shopping List"
        listViewCont.classList.remove("hidden")
        // void viewList.offsetWidth
        listViewCont.classList.remove("view-anim")
    } else {
        headerTitle.textContent = "Insights"
        statsViewCont.classList.remove("hidden")
        // void statsViewCont.offsetWidth
        statsViewCont.classList.remove("view-anim")
        // updateStatsUI()
    }
}

navList.addEventListener("click", () => {
    switchView('list')
})
navStats.addEventListener("click", () => {
    switchView('stats')
})
// ---------------------------------------------------------

let allitems = []

/**
 *  STATS VIEW
 */

function updateStatsUI() {
    let total = allitems.length
    let bought = allitems.filter(f => f.bought).length
    let pending = total - bought
    let progress = total === 0 ? 0 : Math.round((bought / total) * 100)


    document.getElementById('stat-total').textContent = total
    document.getElementById('stat-bought').textContent = bought
    document.getElementById('stat-pending').textContent = pending
    document.getElementById('stat-progress').textContent = `${progress}%`



    
    const cats = ["Produce", "Dairy", "Meat", "Bakery", "Other"]
    const chartBox = document.getElementById('category-chart')
    chartBox.innerHTML = ''


    cats.forEach(c => {
        let count = allitems.filter(i => i.category === c).length
        let pct = total === 0 ? 0 : (count / total) * 100

        chartBox.innerHTML += `
            <div class="bar-row">
                <div class="bar-label-group"><span>${c}</span><span>${count}</span></div>
                <div class="bar-track"><div class="bar-fill" style="width: ${pct}%"></div></div>
            </div>
        `
    })
}
// ----------------------------------------------------------------------------------

/**
 *  CLEAR BOGHT ITEM FROM LIST
 */
function clearBoughtItems() {
    let q = query(listRef, where("bought", "==", true))

    getDocs(q).then((snap) => {
        let batch = writeBatch(db)

        snap.forEach(d => batch.delete(d.ref))

        batch.commit().then(() => {
            showPeek("BOUGHT ITEMS ARE REMOVED!", 'del')
        }).catch(err => console.error("Batch commit failed:", err))
    }).catch(err => console.error("Failed to get docs:", err))
}

clearBoughtBTN.addEventListener("click", clearBoughtItems)
// ----------------------------------------------------------------------------------
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
        document.querySelectorAll(".filter-tab").forEach((t) => { t.classList.remove("active") })

        tab.classList.add('active')

        currentFilter = tab.dataset.filter
        updateTheList(currentFilter)
    })
})
// ---------------------------------------------------------











sync()