document.addEventListener("DOMContentLoaded", function() {
    const allItems = [
    { category: "Entrees", name: "Iskandar Kebab", description: "Thinly sliced lamb or beef served over pita bread, topped with tomato sauce and yogurt, with melted butter drizzled on top." },
{ category: "Entrees", name: "Lahmajun", description: "A thin Turkish flatbread topped with minced meat, vegetables, and herbs, often served with a squeeze of lemon." },
{ category: "Entrees", name: "Ayasofya Kebab", description: "A special house kebab featuring tender grilled meat served with rice and a side of roasted vegetables." },
{ category: "Entrees", name: "Doner W/ Rice", description: "Sliced doner kebab served with fluffy rice and a side of salad or yogurt." },
{ category: "Entrees", name: "Beyti Kebab", description: "Minced lamb kebab wrapped in lavash bread, served with tomato sauce and yogurt." },
{ category: "Entrees", name: "Ali Nazik", description: "Grilled meat served on a bed of creamy eggplant purée mixed with yogurt and garlic." },
{ category: "Entrees", name: "Monti", description: "Small dumplings filled with spiced meat, served with yogurt and drizzled with melted butter or tomato sauce." },
{ category: "Entrees", name: "Ayasofya Kofte", description: "Turkish-style meatballs made with a blend of beef and lamb, served with rice or bread and salad." },
{ category: "Entrees", name: "Pide", description: "Turkish-style flatbread filled with cheese, meat, or vegetables, baked to perfection." },
{ category: "Entrees", name: "Kavurma", description: "A traditional sautéed meat dish made with tender beef or lamb, onions, and spices." },
{ category: "Entrees", name: "Wet Hamburger", description: "A unique Turkish-style hamburger soaked in a garlicky tomato sauce, giving it a soft texture and bold flavor." },
{ category: "Desserts", name: "Baklava", description: "A rich, sweet pastry made of layers of filo dough filled with chopped nuts and sweetened with honey or syrup." },
{ category: "Beverages", name: "Turkish Tea", description: "Traditional black tea served in a small tulip-shaped glass." },
{ category: "Beverages", name: "Soft Drinks (Pepsi Products)", description: "A variety of Pepsi-brand soft drinks including Pepsi, Diet Pepsi, and others." },
{ category: "Beverages", name: "Turnip Juice", description: "A tangy and refreshing fermented juice made from turnips, popular in Turkish cuisine." },
{ category: "Beverages", name: "Ayran", description: "A chilled yogurt-based drink mixed with water and a pinch of salt, perfect for cooling down." },
{ category: "Beverages", name: "Regular Turkish Coffee", description: "Rich, strong coffee brewed in a traditional cezve and served unfiltered." },
{ category: "Beverages", name: "Turkish Coffee on Sand", description: "Traditional Turkish coffee brewed over hot sand for a unique and authentic taste." },
{ category: "Appetizers & Soups", name: "Lentil Soup", description: "A hearty soup made with red lentils, onions, and spices, often served with a slice of lemon." },
{ category: "Appetizers & Soups", name: "Soup of The Day", description: "A daily special soup made fresh with seasonal ingredients." },
{ category: "Appetizers & Soups", name: "Cig Kofte", description: "Spicy raw meatballs made with bulgur, tomato paste, and a blend of spices, served with lettuce and lemon." },
{ category: "Appetizers & Soups", name: "Stuffed Grape Leaves", description: "Tender grape leaves stuffed with rice, pine nuts, and spices, served cold or warm." },
{ category: "Appetizers & Soups", name: "Stuffed Cabbage", description: "Cabbage leaves filled with a savory mixture of rice, meat, and spices." },
{ category: "Appetizers & Soups", name: "Kibbeh", description: "Deep-fried croquettes filled with spiced ground meat and onions, encased in a crispy bulgur shell." },
{ category: "Appetizers & Soups", name: "Anatolian Cheese Pastry", description: "Flaky pastry filled with a blend of cheeses, baked until golden and crispy." },
{ category: "Appetizers & Soups", name: "Stuffed Flat Bread", description: "Flatbread filled with spiced meat, cheese, or vegetables, grilled or baked to perfection." },
{ category: "Appetizers & Soups", name: "Rolls", description: "Savory rolls filled with spiced vegetables or meat, perfect for snacking." },
{ category: "Appetizers & Soups", name: "Turkish Bagel", description: "A sesame-covered circular bread, soft inside and crispy outside." },
{ category: "Appetizers & Soups", name: "Rose Pie with Cheese", description: "A delicate pastry shaped like a rose and filled with a creamy cheese mixture." },
{ category: "Salads", name: "Shepherd Salad", description: "A refreshing salad with tomatoes, cucumbers, onions, and parsley, dressed with olive oil and lemon juice." },
{ category: "Salads", name: "Mediterranean Salad", description: "A mix of fresh greens, tomatoes, cucumbers, olives, and feta cheese, tossed with a tangy vinaigrette." },
{ category: "Salads", name: "Ayasofya Salad", description: "A house specialty salad with a mix of fresh vegetables, nuts, and a flavorful dressing." },
{ category: "Salads", name: "Onion Salad", description: "A simple yet flavorful salad made with thinly sliced onions, sumac, and parsley." },
{ category: "Salads", name: "Eggplant Salad", description: "A smoky and creamy salad made with roasted eggplant, garlic, and olive oil." },
{ category: "Sandwiches & Wraps", name: "Gobit Doner", description: "Doner meat served in a round gobit bread, filled with vegetables and sauces." },
{ category: "Sandwiches & Wraps", name: "Doner Wrap", description: "Thin slices of doner meat wrapped in flatbread with fresh vegetables and sauces." },
{ category: "Sandwiches & Wraps", name: "Hatay Wrap", description: "A spicy Turkish wrap filled with seasoned meat, vegetables, and a special sauce." },
{ category: "Pizza", name: "Meat Lovers", description: "A hearty pizza loaded with a variety of meats including doner, sausage, and pepperoni." },
{ category: "Pizza", name: "Ayasofya Pizza", description: "A signature pizza with a Turkish twist, featuring doner meat, vegetables, and special spices." },
{ category: "Pizza", name: "Chicken Pizza", description: "A pizza topped with seasoned chicken, cheese, and fresh vegetables." },
{ category: "Pizza", name: "Veggie Pizza", description: "A vegetarian pizza topped with fresh vegetables, herbs, and a blend of cheeses." },
{ category: "Pizza", name: "Cheese Pizza", description: "A classic pizza topped with a generous amount of melted cheese." },
{ category: "Pizza", name: "Custom Pizza", description: "Build your own pizza with your choice of toppings and sauces." }

    ];

    const menuContainer = document.querySelector(".menu-items");
    const buttons = document.querySelectorAll(".filter-buttons button");

    function displayItems(category) {
        menuContainer.innerHTML = "";
        const filteredItems = category === "All" ? allItems : allItems.filter(item => item.category === category);
        filteredItems.forEach(item => {
            const div = document.createElement("div");
            div.className = "menu-item";
            div.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
            menuContainer.appendChild(div);
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            displayItems(button.textContent);
        });
    });

    displayItems("All");
});