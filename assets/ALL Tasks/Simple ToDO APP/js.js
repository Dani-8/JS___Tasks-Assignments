let taskList = document.getElementById("taskList");
let addBTN = document.getElementById("addBTN");
let taskInput = document.getElementById("taskInput");
let clearAll = document.getElementById("clearAll");

function addTask() {
if (taskInput.value.trim() === "") {
    alert("Please enter a task");
    return;
}


let li = document.createElement("li");
let text = document.createElement("span");
text.textContent = taskInput.value;


let btnsContainer = document.createElement("span");
btnsContainer.classList.add("btns-container");

let checkMark = document.createElement("button");
checkMark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="check-icon svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`;

let deleteBtn = document.createElement("button");
deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="del-icon svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`;

let editBtn = document.createElement("button");
editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="edit-icon svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>`;

btnsContainer.append(checkMark, editBtn, deleteBtn);


checkMark.addEventListener("click", function() {
    checkMark.classList.toggle("completed");
    text.classList.toggle("completed-text");
    if (checkMark.classList.contains("completed")) {
    editBtn.disabled = true;
    deleteBtn.disabled = true;
    } else {
    checkMark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`;
    editBtn.disabled = false;
    deleteBtn.disabled = false;
    }
});


deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
    ClearButton();
});


editBtn.addEventListener("click", function() {
    let newTask = prompt("Edit your task:", text.textContent);
    if (newTask && newTask.trim() !== "") text.textContent = newTask;
});


li.append(text, btnsContainer);
taskList.appendChild(li);
taskInput.value = "";
taskInput.focus();

ClearButton();
}

addBTN.addEventListener("click", addTask);




function ClearButton() {
    clearAll.style.display = taskList.children.length === 0 ? "none" : "inline-block";
}
clearAll.addEventListener("click", function() {
    taskList.innerHTML = "";
    ClearButton();
});

ClearButton();