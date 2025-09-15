document.addEventListener("DOMContentLoaded", function() {
    // GET ALL THE CARDS
    let cards = document.querySelectorAll(".card-wrapper")

    cards.forEach((card) => {
        let randomDelay = Math.random() * 1
        card.style.animationDelay = `${randomDelay}s`
    })
})
