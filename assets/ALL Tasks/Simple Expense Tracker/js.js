let balance = document.getElementById("balance")
let moneyPlue = document.getElementById("money-plus")
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


function render(){
    listCont.innerHTML = ""

    if(listCont.length === 0){
        listCont.innerHTML = `<p>No transactions yet.</p>`
    }
    // -----------------------------------------------------

    transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

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






