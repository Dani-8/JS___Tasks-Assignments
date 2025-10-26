function addTask(){
    let taskInput = document.getElementById("taskInput")
    if(taskInput.value.trim() === "" || taskInput.value == null){
        alert("Please enter a task")
        return
    }

    let taskList = document.getElementById("taskList")
    let li = document.createElement("li")

    let text = document.createElement("span")
    text.textContent = taskInput.value


    let checkMark = document.createElement("button")
    checkMark.textContent = "✔️"
    checkMark.addEventListener("click", function() {
        checkMark.classList.toggle("completed")
        text.classList.toggle("completed-text")
        if(checkMark.className.includes("completed")) {
            checkMark.textContent = "❌"
            editBtn.setAttribute("disabled", "true")
            deleteBtn.setAttribute("disabled", "true")
        } else {
            checkMark.textContent = "✔️"
            editBtn.removeAttribute("disabled")
            deleteBtn.removeAttribute("disabled")
        }
    })


    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li)
    })


    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", function() {
        let newTask = prompt("Edit your task:", text.textContent)
        if(newTask !== null && newTask.trim() !== ""){
            text.textContent = newTask
        }
    })  



    let clearAll = document.getElementById("clearAll")
    if(taskList.length === 0) {
        clearAll.style.display = "none"
    }else{
        clearAll.style.display = "inline-block"
    }

    clearAll.addEventListener("click", function() {
        taskList.innerHTML = ""
    })

    console.log(taskList.children.length);
    

    li.append(text, checkMark, deleteBtn, editBtn)
    taskList.appendChild(li)
    taskInput.value = ""
    taskInput.focus()
}

let addBTN = document.getElementById("addBTN")
addBTN.addEventListener("click", addTask)

























