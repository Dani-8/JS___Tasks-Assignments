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
        itemDiv.innerHTML = `<span class="key">${keyName}</span>: <span class="value">${value}</span>`
        storageList.appendChild(itemDiv)
    }

}

// ==================================================================================================================

function setItem(){
    let key = document.getElementById("set-key-input").value
    let value = document.getElementById("set-value-input").value

    if (!key || !value) {
        console.log('Error: Please enter both a Key and a Value.'+ 'error');
        return;
    }
    
    
    localStorage.setItem(key, value);
    console.log(`${key}: ${value} is now stored.`);
    

    document.getElementById("set-key-input").value = ""
    document.getElementById("set-value-input").value = ""

    updateStorageDisplay()
}

// ==================================================================================================================

function getItem(){
    let key = document.getElementById("get-key-input").value

    if (!key) {
        console.log('Error: Please enter both a Key and a Value.'+ 'error');
        return;
    }


    let value = localStorage.getItem(key)
    if(value !== null){
        console.log(key + ": " + value);
    }else{
        console.log(key + " " + "not found");
    }

    document.getElementById("get-key-input").value = ""
}

// ==================================================================================================================

function removeitem(){
    let key = document.getElementById("remove-key-input").value

    if (!key) {
        console.log('Error: Please enter both a Key and a Value.'+ 'error');
        return;
    }

    
    document.getElementById("remove-key-input").value = ""
    
    if (localStorage.getItem(key) !== null){
        localStorage.removeItem(key)
        console.log(`${key}: Removed`);
    }else{
        console.log(key + " "+ "not found");
    }

    updateStorageDisplay()
}

// ==================================================================================================================

function storageClear() {
    if (localStorage.length > 0) {
        localStorage.clear();
        console.log("localStorage was completely cleared.");
    } else {
        console.log("localStorage is already empty...");
    }

    updateStorageDisplay();
}

// ==================================================================================================================

function keyIndex(){
    let index = document.getElementById("key-index-input").value

    if (isNaN(index) || index < 0) {
        console.log('Please enter a valid non-negative index number.');
        return;
    }


    let keyName = localStorage.key(index)
    if(keyName !== null){
        console.log(`Key at index ${index} is: "${keyName}"`);
    }else{
        console.log(`Index ${index} doesn't exist (current length: ${localStorage.length}).`);
    }

    document.getElementById("key-index-input").value = ""
}











































document.addEventListener('DOMContentLoaded', updateStorageDisplay);
























