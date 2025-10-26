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

let checkMark = document.createElement("button");
checkMark.textContent = "✔️";

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

let editBtn = document.createElement("button");
editBtn.textContent = "Edit";

checkMark.addEventListener("click", function() {
    checkMark.classList.toggle("completed");
    text.classList.toggle("completed-text");
    if (checkMark.classList.contains("completed")) {
    checkMark.textContent = "❌";
    editBtn.disabled = true;
    deleteBtn.disabled = true;
    } else {
    checkMark.textContent = "✔️";
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

li.append(text, checkMark, deleteBtn, editBtn);
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