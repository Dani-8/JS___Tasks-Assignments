document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form")
    let msg = document.getElementById("msg")

    let cardName = document.getElementById('card-name');
    let cardTitle = document.getElementById('card-title');
    let cardEmail = document.getElementById('card-email');
    let cardPhone = document.getElementById('card-phone');
    let cardPhoto = document.getElementById('card-photo');
    let cardId = document.getElementById('card-id');

    let generateBTN = document.getElementById("generate-btn")

    // ----------------------------------------------------------
    // ----------------------------------------------------------
    // ----------------------------------------------------------

    function showmsg(){
        msg.classList.remove("hidden")
        msg.classList.add("active")


        setTimeout(() => {
            msg.classList.remove("active")
            msg.classList.add('hidden');
        }, 3000);
    }


    
    function createCard(e){
            e.preventDefault();

        let fullName = document.getElementById('full-name').value.trim();
        let jobTitle = document.getElementById('job-title').value.trim();
        let email = document.getElementById('email').value.trim();
        let phone = document.getElementById('phone').value.trim();
        let photoUrl = document.getElementById('photo-url').value.trim();


        // if (!fullName || !jobTitle || !email || !phone || !photoUrl) {
        //     showMessage("All fields are required!", true);
        //     return;
        // }



        cardName.textContent = fullName.toUpperCase()
        cardTitle.textContent = jobTitle
        cardEmail.textContent = email
        cardPhone.textContent = phone
        cardPhoto.src = photoUrl

        // cardId.textContent = generateId();

        showmsg()
    }


    generateBTN.addEventListener("click", createCard)



    cardName.textContent = "ALEX D'SILVA";
    cardTitle.textContent = "Senior UX Designer";
    cardEmail.textContent = "alex.dsilva@corp.com";
    cardPhone.textContent = "(555) 123-4567";
    cardPhoto.src = "https://placehold.co/150x150/4f46e5/ffffff?text=INIT";
})









































