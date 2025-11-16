let balance = document.getElementById("balance")
let moneyPlus = document.getElementById("money-plus")
let moneyMinus = document.getElementById("money-minus")

let titleInput = document.getElementById("title-input")
let categoryInput = document.getElementById("category-input")
let dateInput = document.getElementById("date-input")
let incomeAmountInput = document.getElementById("income-amount-input")
let expenseAmountInput = document.getElementById("expense-amount-input")

let errorMSG = document.getElementById("error-msg")
let listCont = document.getElementById("list-cont")

let modal = document.getElementById("delete-modal")
let modalCancleBTN = document.getElementById("modal-cancel")
let modalDeleteBTN = document.getElementById("modal-delete")
// ============================================================================

let transactions = []
let editingTransactionId = null;

// ============================================================================

function addTransaction(type){
    errorMSG.classList.add('hidden');
    let text = titleInput.value.trim();
    let category = categoryInput.value;
    let date = dateInput.value;
    let amountInputEl = type === 'income' ? incomeAmountInput : expenseAmountInput;
    let amount = parseFloat(amountInputEl.value);

    if (!text || !amount || amount <= 0 || !category || !date) {
        errorMSG.textContent = 'Please fill out all fields (Description, Category, Date, and Amount).';
        errorMSG.classList.remove('hidden');
        return;
    }
    // ------------------------------------------------------------------------------------------------------------

    if(editingTransactionId){
        let index = transactions.findIndex(t => t.id === editingTransactionId)

        if(index !== -1){
            transactions[index].text = text;
            transactions[index].amount = amount;
            transactions[index].type = type; 
            transactions[index].category = category;
            transactions[index].date = date;
            
            editingTransactionId = null;
        }
    }else{
        let newTransaction = {
            id: Date.now(),
            text: text,
            amount: amount,
            type: type,
            category: category,
            date: date

        };
        transactions.push(newTransaction);
    }

    render()
}
// ============================================================================


function displayTransaction(transaction){
    let amountDisplay = transaction.type === 'income' ? `+Rs${transaction.amount.toFixed(2)}` : `-Rs${transaction.amount.toFixed(2)}`;
    let borderColor = transaction.type === 'income' ? 'border-color: rgb(14, 156, 19);' : 'border-color: rgb(213, 24, 24);';
    let amountColor = transaction.type === 'income' ? 'color: rgb(14, 156, 19);' : 'color: rgb(213, 24, 24);';

    let dateParts = transaction.date.split('-');
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0].slice(2)}`;

    let item = document.createElement("li")
    item.style = borderColor
    item.innerHTML = `
        <div class="item-info">
            <span class="item-info-span1">${transaction.text}</span>
            <span class="item-info-span2">${transaction.category} | ${formattedDate} </span>
        </div>
        <div class="amount-btns-cont">  
            <span class="amount-number" style="${amountColor}">${amountDisplay}</span>

            <!-- Edit Button -->
            <button class="btn edit-btn" data-id="${transaction.id}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </button>

            <!-- Delete Button -->
            <button class="btn delete-btn" data-id="${transaction.id}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
        </div>
    `


    
    item.querySelector('.delete-btn').addEventListener('click', () => showConfirmation(transaction.id))
    item.querySelector('.edit-btn').addEventListener('click', () => loadTransactionForEdit(transaction.id))
    listCont.appendChild(item)
}
// ============================================================================



function loadTransactionForEdit(id){
    let transaction = transactions.find(t => t.id === id)
    if(!transaction) return

    editingTransactionId = id

    titleInput.value = transaction.text
    categoryInput.value = transaction.category
    dateInput.value = transaction.date
    
    if(transaction.type === 'income'){
        incomeAmountInput.value = transaction.amount.toFixed(2)
        expenseAmountInput.value = ''
    }else{
        expenseAmountInput.value = transaction.amount.toFixed(2)
        incomeAmountInput.value = ''
    }
    
    errorMSG.textContent = `Editing transaction: "${transaction.text}". Click 'Add/Update' below to save changes.`
    errorMSG.classList.remove('hidden')
}
// ============================================================================



function render(){
    listCont.innerHTML = ""

    if(listCont.length === 0){
        listCont.innerHTML = `<p>No transactions yet.</p>`
    }
    // -----------------------------------------------------

    transactions.sort((a, b) => new Date(b.date) - new Date(a.date))


    transactions.forEach(displayTransaction)
    updateValues()
    saveTransactions()


    if(editingTransactionId === null){
        titleInput.value = ""
        categoryInput.value = ""
        incomeAmountInput.value = ""
        expenseAmountInput.value = ""
        let today = new Date().toISOString().split("T")[0]
        dateInput.value = today

        errorMSG.classList.add("hidden")
    }
}
// ============================================================================
// ============================================================================

function getTransactions(){
    let stored = localStorage.getItem('transactions')
    transactions = stored ? JSON.parse(stored) : []
    
    let today = new Date().toISOString().split('T')[0]
    dateInput.value = today

    render()
}

function saveTransactions(){
    localStorage.setItem('transactions', JSON.stringify(transactions))
}


function updateValues() {
    let income = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + t.amount, 0);

    let expense = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + t.amount, 0);

    let total = income - expense;

    balance.textContent = `Rs${total.toFixed(2)}`;
    moneyPlus.textContent = `Rs${income.toFixed(2)}`;
    moneyMinus.textContent = `Rs${expense.toFixed(2)}`;
    
    
    balance.classList.remove('balance-green', 'balance-red', 'balance-grey');
    if (total > 0) {
        balance.classList.add('balance-green');
    } else if (total < 0) {
        balance.classList.add('balance-red');
    } else {
        balance.classList.add('balance-grey');
    }
}


// ============================================================================
// ============================================================================

function removeTransaction(id){
    transactions = transactions.filter(t => t.id !== id);
    render();
}
// ============================================================================


function showConfirmation(id) {
    modal.classList.add('flex');
    modal.classList.remove('hidden');

    modalDeleteBTN.onclick = () => {
        removeTransaction(id);
        hideModal();
    };

    modalCancleBTN.onclick = hideModal;
}
// ============================================================================


function hideModal() {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}
// ============================================================================


window.onload = getTransactions;






