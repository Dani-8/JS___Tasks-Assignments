let storageLength = document.getElementById("storage-length")
let storageList = document.getElementById("storage-list")

function updateStorageDisplay(){
    storageLength.textContent = localStorage.length
    storageList.innerHTML = ""

    if (localStorage.length === 0) {
        storageList.innerHTML = '<p>Storage is currently empty. Use setItem() to add data.</p>';
        return;
    }
    

    for(let i = 0; i < localStorage.length; i++){
        let keyName = localStorage.key(i)
        let value = localStorage.getItem(keyName)

        let itemDiv = document.createElement("div")
        itemDiv.classList = "item-div"
        itemDiv.innerHTML = `<span class="key">${keyName}:</span> <span class="value">${value}</span>`
        storageList.appendChild(itemDiv)
    }

}

// ==================================================================================================================

function setItem(){
    let key = document.getElementById("set-key-input").value
    let value = document.getElementById("set-value-input").value

    if (!key || !value) {
        alert('Error: Please enter both a Key and a Value.');
        return;
    }
    
    
    localStorage.setItem(key, value);
    alert(`${key}: ${value} is now stored.`);
    

    document.getElementById("set-key-input").value = ""
    document.getElementById("set-value-input").value = ""

    updateStorageDisplay()
}

// ==================================================================================================================

function getItem(){
    let key = document.getElementById("get-key-input").value

    if (!key) {
        alert('Error: Please enter a Key to retrieve.');
        return;
    }


    let value = localStorage.getItem(key)
    if(value !== null){
        alert(key + ": " + value);
    }else{
        alert(key + " not found");
    }

    document.getElementById("get-key-input").value = ""
}

// ==================================================================================================================

function removeitem(){
    let key = document.getElementById("remove-key-input").value

    if (!key) {
        alert('Error: Please enter a Key to remove.');
        return;
    }

    
    document.getElementById("remove-key-input").value = ""
    
    if (localStorage.getItem(key) !== null){
        localStorage.removeItem(key)
        alert(`${key}: Removed`);
    }else{
        alert(key + " not found");
    }

    updateStorageDisplay()
}

// ==================================================================================================================

function storageClear() {
    if (localStorage.length > 0) {
        localStorage.clear();
        alert("localStorage was completely cleared.");
    } else {
        alert("localStorage is already empty...");
    }

    updateStorageDisplay();
}

// ==================================================================================================================

function keyIndex(){
    let index = document.getElementById("key-index-input").value

    if (isNaN(index) || index < 0) {
        alert('Please enter a valid non-negative index number.');
        return;
    }


    let keyName = localStorage.key(index)
    if(keyName !== null){
        alert(`Key at index ${index} is: "${keyName}"`);
    }else{
        alert(`Index ${index} doesn't exist (current length: ${localStorage.length}).`);
    }

    document.getElementById("key-index-input").value = ""
}

// ==================================================================================================================


function handleSaveObject(){
    let key = document.getElementById("jsonKeyInput").value
    let jsonString = document.getElementById("jsonObjectInput").value

    if (!key || !jsonString) {
        alert('Error: Please enter both a Key and a JSON object/array in the textarea.')
        return;
    }
    // ------------------------------------------------------------------------------------------


    let obj = JSON.parse(jsonString)
    let finalString = JSON.stringify(obj)

    localStorage.setItem(key, finalString)

    document.getElementById('jsonKeyInput').value = ''
    document.getElementById('jsonObjectInput').value = ''

    alert(`Success! Object saved as string under Key='${key}'`)
    updateStorageDisplay();
}

// ==================================================================================================================

function handleLoadObject(){
    let key = document.getElementById("jsonKeyInput").value

    if (!key) {
        alert('Error: Please enter the Key for the JSON data.');
        return;
    }
    // -----------------------------------------------------------

    let storedString = localStorage.getItem(key);

    if(storedString === null){
        alert(`Key '${key}' not found (returned null).`)
    }


    let parsedObject = JSON.parse(storedString)
    alert(`Retrieved and Parsed Object (Type: ${Array.isArray(parsedObject) ? 'Array' : typeof parsedObject}):\n\n ${JSON.stringify(parsedObject, null, 2)}`)

}










































document.addEventListener('DOMContentLoaded', updateStorageDisplay);
























