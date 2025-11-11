let storageLength = document.getElementById("storage-length")
let storageList = document.getElementById("storage-list")

function updateStorageDisplay(){
    storageLength.textContent = localStorage.length
    storageList.innerHTML = ""

    if (localStorage.length === 0) {
        storageList.innerHTML = '<p>Storage is currently empty. Use setItem() to add data.</p>';
        return;
    }
    
    

}

updateStorageDisplay()
























