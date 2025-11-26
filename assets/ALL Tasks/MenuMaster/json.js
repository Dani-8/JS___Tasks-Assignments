export let restaurantMenu = [
{
    "categoryID": 1,
    "categoryName": "Burger",
    "description": "A variety of juicy and flavorful burgers made with fresh ingredients.",
    "menuItems": [
    {"id": 1, "name": "Normal Burger", "price": 499.00, "rating": 4.2, "isAvailable": true, "prepTimeMinutes": 10, "mainIngredient": ["Beef Patty"], "isSpicy": false},
    {"id": 2, "name": "Cheeseburger", "price": 549.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 12, "mainIngredient": ["Beef Patty", "Cheese"], "isSpicy": false},
    {"id": 3, "name": "Chicken Burger", "price": 599.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 15, "mainIngredient": ["Chicken Breast"], "isSpicy": false},
    {"id": 4, "name": "Beef Zinger", "price": 649.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 18, "mainIngredient": ["Spicy Beef Patty"], "isSpicy": true},
    {"id": 5, "name": "Double Patty Burger", "price": 799.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 20, "mainIngredient": ["Double Beef Patty"], "isSpicy": false},
    {"id": 6, "name": "Veggie Burger", "price": 489.00, "rating": 4.0, "isAvailable": true, "prepTimeMinutes": 10, "mainIngredient": ["Veggie Patty"], "isSpicy": false},
    {"id": 7, "name": "Bacon Burger", "price": 699.00, "rating": 4.4, "isAvailable": false, "prepTimeMinutes": 15, "mainIngredient": ["Beef Patty", "Bacon"], "isSpicy": false},
    {"id": 8, "name": "Spicy Chicken Burger", "price": 629.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 15, "mainIngredient": ["Spicy Chicken Breast"], "isSpicy": true}
    ]
},
{
    "categoryID": 2,
    "categoryName": "Pizza",
    "description": "Delicious pizzas with a variety of toppings and crust styles.",
    "menuItems": [
    {"id": 1, "name": "Margherita Pizza", "price": 799.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 20, "mainIngredient": ["Mozzarella Cheese", "Tomato Sauce", "Basil"], "isSpicy": false},
    {"id": 2, "name": "Pepperoni Pizza", "price": 899.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 22, "mainIngredient": ["Pepperoni", "Cheese", "Tomato Sauce"], "isSpicy": false},
    {"id": 3, "name": "BBQ Chicken Pizza", "price": 949.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 25, "mainIngredient": ["BBQ Chicken", "Cheese", "Onions"], "isSpicy": true},
    {"id": 4, "name": "Veggie Supreme", "price": 849.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 23, "mainIngredient": ["Bell Peppers", "Onions", "Olives"], "isSpicy": false},
    {"id": 5, "name": "Hawaiian Pizza", "price": 879.00, "rating": 4.1, "isAvailable": true, "prepTimeMinutes": 20, "mainIngredient": ["Ham", "Pineapple", "Cheese"], "isSpicy": false},
    {"id": 6, "name": "Four Cheese Pizza", "price": 929.00, "rating": 4.4, "isAvailable": true, "prepTimeMinutes": 22, "mainIngredient": ["Mozzarella", "Cheddar", "Parmesan", "Gorgonzola"], "isSpicy": false},
    {"id": 7, "name": "Spicy Italian Pizza", "price": 959.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 25, "mainIngredient": ["Spicy Sausage", "Chili Flakes", "Cheese"], "isSpicy": true},
    {"id": 8, "name": "Buffalo Chicken Pizza", "price": 979.00, "rating": 4.6, "isAvailable": false, "prepTimeMinutes": 26, "mainIngredient": ["Buffalo Chicken", "Cheese", "Hot Sauce"], "isSpicy": true}
    ]
},
{
    "categoryID": 3,
    "categoryName": "Seafood",
    "description": "Fresh and tasty seafood dishes from oceans around the world.",
    "menuItems": [
    {"id": 1, "name": "Grilled Salmon", "price": 1299.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 25, "mainIngredient": ["Salmon"], "isSpicy": false},
    {"id": 2, "name": "Fried Shrimp", "price": 1149.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 20, "mainIngredient": ["Shrimp", "Batter"], "isSpicy": false},
    {"id": 3, "name": "Lobster Tail", "price": 1999.00, "rating": 4.8, "isAvailable": false, "prepTimeMinutes": 30, "mainIngredient": ["Lobster"], "isSpicy": false},
    {"id": 4, "name": "Crab Cakes", "price": 1349.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 22, "mainIngredient": ["Crab Meat", "Breadcrumbs", "Spices"], "isSpicy": false},
    {"id": 5, "name": "Seafood Paella", "price": 1499.00, "rating": 4.4, "isAvailable": true, "prepTimeMinutes": 35, "mainIngredient": ["Shrimp", "Mussels", "Rice", "Peas"], "isSpicy": true},
    {"id": 6, "name": "Garlic Butter Mussels", "price": 1199.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 20, "mainIngredient": ["Mussels", "Garlic Butter"], "isSpicy": false},
    {"id": 7, "name": "Spicy Tuna Roll", "price": 999.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 15, "mainIngredient": ["Tuna", "Chili Sauce", "Rice"], "isSpicy": true},
    {"id": 8, "name": "Fish Tacos", "price": 1049.00, "rating": 4.2, "isAvailable": true, "prepTimeMinutes": 18, "mainIngredient": ["White Fish", "Tortilla", "Cabbage"], "isSpicy": true}
    ]
},
{
    "categoryID": 4,
    "categoryName": "Sweet",
    "description": "Delightful desserts and sweet treats to satisfy your cravings.",
    "menuItems": [
    {"id": 1, "name": "Chocolate Cake", "price": 549.00, "rating": 4.8, "isAvailable": true, "prepTimeMinutes": 15, "mainIngredient": ["Chocolate", "Flour", "Sugar"], "isSpicy": false},
    {"id": 2, "name": "Apple Pie", "price": 499.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 20, "mainIngredient": ["Apple", "Flour", "Sugar"], "isSpicy": false},
    {"id": 3, "name": "Ice Cream Sundae", "price": 399.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 10, "mainIngredient": ["Ice Cream", "Chocolate Syrup"], "isSpicy": false},
    {"id": 4, "name": "Cheesecake", "price": 599.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 15, "mainIngredient": ["Cream Cheese", "Sugar"], "isSpicy": false},
    {"id": 5, "name": "Brownie", "price": 349.00, "rating": 4.4, "isAvailable": true, "prepTimeMinutes": 12, "mainIngredient": ["Chocolate", "Flour", "Sugar"], "isSpicy": false},
    {"id": 6, "name": "Lemon Tart", "price": 429.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 18, "mainIngredient": ["Lemon", "Flour", "Sugar"], "isSpicy": false},
    {"id": 7, "name": "Tiramisu", "price": 649.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 20, "mainIngredient": ["Mascarpone", "Coffee"], "isSpicy": false},
    {"id": 8, "name": "Ras Malai", "price": 499.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 15, "mainIngredient": ["Milk", "Sugar", "Saffron"], "isSpicy": false}
    ]
},
{
    "categoryID": 5,
    "categoryName": "Tikka/Grill",
    "description": "Sumptuous grilled and tikka specialties, rich in flavor and aroma.",
    "menuItems": [
    {"id": 1, "name": "Chicken Tikka", "price": 999.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 25, "mainIngredient": ["Chicken", "Yogurt", "Spices"], "isSpicy": true},
    {"id": 2, "name": "Beef Seekh Kebab", "price": 1049.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 30, "mainIngredient": ["Beef", "Spices"], "isSpicy": true},
    {"id": 3, "name": "Grilled Fish Tikka", "price": 1199.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 28, "mainIngredient": ["Fish", "Spices"], "isSpicy": true},
    {"id": 4, "name": "Paneer Tikka", "price": 849.00, "rating": 4.4, "isAvailable": true, "prepTimeMinutes": 22, "mainIngredient": ["Paneer", "Yogurt", "Spices"], "isSpicy": true},
    {"id": 5, "name": "Lamb Chops", "price": 1399.00, "rating": 4.8, "isAvailable": false, "prepTimeMinutes": 35, "mainIngredient": ["Lamb", "Herbs", "Spices"], "isSpicy": true},
    {"id": 6, "name": "Tandoori Chicken", "price": 1099.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 30, "mainIngredient": ["Chicken", "Yogurt", "Spices"], "isSpicy": true},
    {"id": 7, "name": "Grilled Prawns", "price": 1249.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 25, "mainIngredient": ["Prawns", "Garlic", "Spices"], "isSpicy": true},
    {"id": 8, "name": "Chicken Malai Tikka", "price": 949.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 27, "mainIngredient": ["Chicken", "Cream", "Spices"], "isSpicy": false}
    ]
},
{
    "categoryID": 6,
    "categoryName": "Biryani & Pakistani Dishes",
    "description": "Traditional Pakistani dishes, biryanis, and flavorful karahi specials.",
    "menuItems": [
    {"id": 1, "name": "Chicken Biryani", "price": 1099.00, "rating": 4.8, "isAvailable": true, "prepTimeMinutes": 35, "mainIngredient": ["Chicken", "Basmati Rice", "Spices"], "isSpicy": true},
    {"id": 2, "name": "Beef Biryani", "price": 1149.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 40, "mainIngredient": ["Beef", "Basmati Rice", "Spices"], "isSpicy": true},
    {"id": 3, "name": "Pulao", "price": 899.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 30, "mainIngredient": ["Rice", "Carrots", "Spices"], "isSpicy": false},
    {"id": 4, "name": "Aloo Biryani", "price": 949.00, "rating": 4.4, "isAvailable": true, "prepTimeMinutes": 35, "mainIngredient": ["Potatoes", "Basmati Rice", "Spices"], "isSpicy": true},
    {"id": 5, "name": "Chicken Karahi", "price": 1299.00, "rating": 4.8, "isAvailable": true, "prepTimeMinutes": 40, "mainIngredient": ["Chicken", "Tomatoes", "Spices"], "isSpicy": true},
    {"id": 6, "name": "Beef Karahi", "price": 1449.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 45, "mainIngredient": ["Beef", "Tomatoes", "Spices"], "isSpicy": true},
    {"id": 7, "name": "Mutton Karahi", "price": 1599.00, "rating": 4.9, "isAvailable": false, "prepTimeMinutes": 50, "mainIngredient": ["Mutton", "Tomatoes", "Spices"], "isSpicy": true},
    {"id": 8, "name": "Gosht Nihari", "price": 1649.00, "rating": 4.8, "isAvailable": true, "prepTimeMinutes": 60, "mainIngredient": ["Beef Shank", "Spices"], "isSpicy": true}
    ]
},
{
    "categoryID": 7,
    "categoryName": "Drinks & Cold Drinks",
    "description": "Refreshing beverages including cold drinks, shakes, and traditional drinks.",
    "menuItems": [
    {"id": 1, "name": "Mango Lassi", "price": 399.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 5, "mainIngredient": ["Mango", "Yogurt", "Sugar"], "isSpicy": false},
    {"id": 2, "name": "Mint Lemonade", "price": 299.00, "rating": 4.4, "isAvailable": true, "prepTimeMinutes": 5, "mainIngredient": ["Lemon", "Mint", "Sugar"], "isSpicy": false},
    {"id": 3, "name": "Cold Coffee", "price": 349.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 7, "mainIngredient": ["Coffee", "Milk", "Ice"], "isSpicy": false},
    {"id": 4, "name": "Rooh Afza", "price": 249.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 3, "mainIngredient": ["Rose Syrup", "Sugar", "Water"], "isSpicy": false},
    {"id": 5, "name": "Orange Juice", "price": 399.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 5, "mainIngredient": ["Orange"], "isSpicy": false},
    {"id": 6, "name": "Masala Chai", "price": 299.00, "rating": 4.8, "isAvailable": true, "prepTimeMinutes": 10, "mainIngredient": ["Tea", "Milk", "Spices"], "isSpicy": true},
    {"id": 7, "name": "Cold Cola", "price": 199.00, "rating": 4.0, "isAvailable": true, "prepTimeMinutes": 1, "mainIngredient": ["Carbonated Water", "Sugar"], "isSpicy": false},
    {"id": 8, "name": "Strawberry Shake", "price": 429.00, "rating": 4.6, "isAvailable": false, "prepTimeMinutes": 7, "mainIngredient": ["Strawberries", "Milk", "Sugar"], "isSpicy": false}
    ]
},
{
    "categoryID": 8,
    "categoryName": "Sandwiches & Pastas",
    "description": "Tasty sandwiches and classic pasta dishes perfect for any meal.",
    "menuItems": [
    {"id": 1, "name": "Club Sandwich", "price": 599.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 15, "mainIngredient": ["Bread", "Chicken", "Lettuce", "Mayonnaise"], "isSpicy": false},
    {"id": 2, "name": "Grilled Cheese Sandwich", "price": 449.00, "rating": 4.2, "isAvailable": true, "prepTimeMinutes": 10, "mainIngredient": ["Bread", "Cheese", "Butter"], "isSpicy": false},
    {"id": 3, "name": "Chicken Pesto Pasta", "price": 799.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 25, "mainIngredient": ["Pasta", "Chicken", "Pesto Sauce"], "isSpicy": false},
    {"id": 4, "name": "Spaghetti Bolognese", "price": 849.00, "rating": 4.7, "isAvailable": true, "prepTimeMinutes": 27, "mainIngredient": ["Spaghetti", "Beef", "Tomato Sauce"], "isSpicy": false},
    {"id": 5, "name": "Veggie Sandwich", "price": 499.00, "rating": 4.1, "isAvailable": true, "prepTimeMinutes": 12, "mainIngredient": ["Bread", "Tomato", "Lettuce", "Cucumber"], "isSpicy": false},
    {"id": 6, "name": "Alfredo Pasta", "price": 799.00, "rating": 4.4, "isAvailable": false, "prepTimeMinutes": 25, "mainIngredient": ["Pasta", "Cream", "Parmesan"], "isSpicy": false},
    {"id": 7, "name": "Chicken Fajita Wrap", "price": 699.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 18, "mainIngredient": ["Tortilla", "Chicken", "Bell Peppers"], "isSpicy": true},
    {"id": 8, "name": "Penne Arrabiata", "price": 749.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 23, "mainIngredient": ["Penne Pasta", "Tomato Sauce", "Chili"], "isSpicy": true}
    ]
},
{
    "categoryID": 9,
    "categoryName": "Salads",
    "description": "Fresh and healthy salads with a variety of greens and dressings.",
    "menuItems": [
    {"id": 1, "name": "Caesar Salad", "price": 499.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 10, "mainIngredient": ["Romaine Lettuce", "Caesar Dressing", "Parmesan"], "isSpicy": false},
    {"id": 2, "name": "Greek Salad", "price": 549.00, "rating": 4.4, "isAvailable": true, "prepTimeMinutes": 12, "mainIngredient": ["Tomato", "Cucumber", "Feta Cheese", "Olives"], "isSpicy": false},
    {"id": 3, "name": "Garden Salad", "price": 449.00, "rating": 4.2, "isAvailable": true, "prepTimeMinutes": 8, "mainIngredient": ["Mixed Greens", "Carrots", "Tomatoes"], "isSpicy": false},
    {"id": 4, "name": "Chicken Salad", "price": 599.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 15, "mainIngredient": ["Chicken", "Lettuce", "Mayonnaise"], "isSpicy": false},
    {"id": 5, "name": "Fruit Salad", "price": 399.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 10, "mainIngredient": ["Mixed Fruits"], "isSpicy": false},
    {"id": 6, "name": "Quinoa Salad", "price": 649.00, "rating": 4.5, "isAvailable": false, "prepTimeMinutes": 12, "mainIngredient": ["Quinoa", "Cucumber", "Tomato"], "isSpicy": false},
    {"id": 7, "name": "Tuna Salad", "price": 599.00, "rating": 4.4, "isAvailable": true, "prepTimeMinutes": 14, "mainIngredient": ["Tuna", "Lettuce", "Mayonnaise"], "isSpicy": false},
    {"id": 8, "name": "Caprese Salad", "price": 549.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 10, "mainIngredient": ["Tomato", "Mozzarella", "Basil"], "isSpicy": false}
    ]
},
{
    "categoryID": 10,
    "categoryName": "Soups",
    "description": "Warm and comforting soups to start your meal.",
    "menuItems": [
    {"id": 1, "name": "Chicken Corn Soup", "price": 399.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 12, "mainIngredient": ["Chicken", "Corn", "Broth"], "isSpicy": false},
    {"id": 2, "name": "Tomato Soup", "price": 349.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 10, "mainIngredient": ["Tomato", "Cream", "Herbs"], "isSpicy": false},
    {"id": 3, "name": "Mushroom Soup", "price": 399.00, "rating": 4.4, "isAvailable": true, "prepTimeMinutes": 15, "mainIngredient": ["Mushroom", "Cream", "Garlic"], "isSpicy": false},
    {"id": 4, "name": "Chicken Noodle Soup", "price": 449.00, "rating": 4.6, "isAvailable": true, "prepTimeMinutes": 18, "mainIngredient": ["Chicken", "Noodles", "Broth"], "isSpicy": false},
    {"id": 5, "name": "Hot and Sour Soup", "price": 399.00, "rating": 4.4, "isAvailable": false, "prepTimeMinutes": 15, "mainIngredient": ["Vegetables", "Vinegar", "Chili"], "isSpicy": true},
    {"id": 6, "name": "Lentil Soup", "price": 349.00, "rating": 4.2, "isAvailable": true, "prepTimeMinutes": 20, "mainIngredient": ["Lentils", "Spices"], "isSpicy": false},
    {"id": 7, "name": "Pumpkin Soup", "price": 399.00, "rating": 4.3, "isAvailable": true, "prepTimeMinutes": 18, "mainIngredient": ["Pumpkin", "Cream", "Spices"], "isSpicy": false},
    {"id": 8, "name": "Seafood Chowder", "price": 499.00, "rating": 4.5, "isAvailable": true, "prepTimeMinutes": 25, "mainIngredient": ["Mixed Seafood", "Cream", "Potatoes"], "isSpicy": false}
    ]
}
]
