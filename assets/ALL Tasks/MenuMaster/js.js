import {restaurantMenu} from "./json.js"

console.log(restaurantMenu);
// ======================================================

function FoodCategory(id, name, description){
    this.id = id
    this.name = name
    this.description = description
    this.menuItems = []
}

function MenuItem(id, name, price, rating, prepTimeMinutes, mainIngredient, isSpicy){
    this.id = id
    this.name = name
    this.price = parseFloat(price)
    this.rating = parseFloat(rating)
    this.isAvailable = true; 
    this.prepTimeMinutes = parseFloat(prepTimeMinutes)
    this.mainIngredient = Array.isArray(mainIngredient) ? mainIngredient : [mainIngredient]
    this.isSpicy = isSpicy
}

// ===================================================================================================

let menuContainer = document.getElementById("menu-container")


function renderMenuItemCard(item){
    let itemCard = document.createElement("div")
    itemCard.classList = "item-card"

    let availableClass = item.isAvailable ? "item-isAvailable" : "item-isSoldOut"
    let spicyIndicator = item.isSpicy ? '<span class="isSpicy">🌶️</span>' : '';
    let mainIngredients = Array.isArray(item.mainIngredient) ? item.mainIngredient.join(', ') : item.mainIngredient;


    itemCard.innerHTML = `
        <div class="item-card-details">
            <div class="item-heading">
                <h3>${item.name} ${spicyIndicator}</h3>
            </div>
            <p class="item-availability ${availableClass}">
                ${item.isAvailable  ? 'Available' : 'Sold Out'}
            </p>

            <p class="item-ingredients">
                ${mainIngredients}
            </p>
        </div>

        <div class="item-card-values">
            <div>
                <p class="item-price">Rs. <br> ${item.price.toFixed(2)}</p>
                <p class="item-prepTime">Ready in ${item.prepTimeMinutes} Mints</p>
            </div>
            <div>
                <p class="item-rating">${renderStars(item.rating)}</p>
            </div>
        </div>
    `

    return itemCard
}
// ============================================================================================================


function renderMenu(){
    menuContainer.innerHTML = ""

    restaurantMenu.forEach(category => {
        let header = document.createElement("div")
        header.className = 'category-header'
        header.setAttribute("data-category-id", category.categoryID)

        header.innerHTML = `
            <h2>${category.categoryName}</h2>
            <span class="items-length">${category.menuItems.length} Items</span>
        `
        // -----------------------------------------------------------------------

        let content = document.createElement("div")
        content.className = "category-content"
        content.id = `content-${category.categoryID}`
        content.style.display = "block"

        let itemGrid = document.createElement("div")
        itemGrid.classList = "item-cards-cont"
        // -----------------------------------------------------------------------

        category.menuItems.forEach(item => {
            let itemCard = renderMenuItemCard(item)
            itemGrid.appendChild(itemCard)
        })

        content.appendChild(itemGrid)
        menuContainer.appendChild(header)
        menuContainer.appendChild(content)


        header.addEventListener("click", () => {
            // toggle visibility
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        })
    })
}

renderMenu()
// ===================================================================================================

function renderStars(rating){
    let roundedRating = Math.round(rating * 2) / 2
    let starHTML = ""

    for(let i = 1; i <= 5; i++){
        if(i <= roundedRating){
            starHTML += '<span class="item-rating">&#9733;</span>'
        } else {
            starHTML += '<span class="item-rating-grey">&#9733;</span>'
        }
    }

    return `<span class="rating-cont">${starHTML}<span class="rating-text">(${rating.toFixed(1)})</span></span>`
}
// ========================================================================================================

function getNextItemId(categoryName){
    let category = restaurantMenu.find(cat => cat.categoryName === categoryName)
    if(!categoryName) return 1

    let maxId = category.menuItems.reduce((max, item) => Math.max(max, item.id), 0)
    
    return maxId + 1
}








