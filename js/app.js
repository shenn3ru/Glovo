const restaurants = [
    {
        id: 1,
        name: "Pizza House",
        category: "Pizza",
        deliveryTime: "30-40 min",
        deliveryPrice: 35
    },
    {
        id: 2,
        name: "Burger Point",
        category: "Burger",
        deliveryTime: "25-35 min",
        deliveryPrice: 30
    },
    {
        id: 3,
        name: "Sushi Express",
        category: "Sushi",
        deliveryTime: "40-50 min",
        deliveryPrice: 45
    },
    {
        id: 4,
        name: "Pasta Corner",
        category: "Paste",
        deliveryTime: "30-40 min",
        deliveryPrice: 25
    }
];

let cart = [];

function displayRestaurants() {
    const container =
        document.getElementById("restaurant-list");

    container.innerHTML = "";

    restaurants.forEach(restaurant => {
        const card = document.createElement("div");

        card.className = "restaurant-card";

        card.innerHTML = `
            <h3>${restaurant.name}</h3>

            <p>
                Categorie: ${restaurant.category}
            </p>

            <p>
                Livrare: ${restaurant.deliveryTime}
            </p>

            <p>
                Livrare: ${restaurant.deliveryPrice} MDL
            </p>

            <button onclick="addToCart(${restaurant.id})">
                Adaugă în coș
            </button>
        `;

        container.appendChild(card);
    });
}

function addToCart(id) {
    const restaurant =
        restaurants.find(item => item.id === id);

    cart.push(restaurant);

    displayCart();

    alert(
        `${restaurant.name} a fost adăugat în coș!`
    );
}

function displayCart() {
    const container =
        document.getElementById("cart-items");

    const totalElement =
        document.getElementById("cart-total");

    if (cart.length === 0) {
        container.innerHTML =
            "<p>Coșul este gol.</p>";

        totalElement.textContent = "0";

        return;
    }
alert(
    "Comanda ta a fost înregistrată cu succes!"
);

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.deliveryPrice;

        const element =
            document.createElement("div");

        element.className = "cart-item";

        element.innerHTML = `
            <span>
                ${item.name}
            </span>

            <span>
                ${item.deliveryPrice} MDL

                <button onclick="removeFromCart(${index})">
                    Șterge
                </button>
            </span>
        `;

        container.appendChild(element);
    });

    totalElement.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);

    displayCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Coșul este gol!");

        return;
    }

    alert(
        "Comanda ta a fost înregistrată cu succes!"
    );

    cart = [];

    displayCart();
}

function scrollToRestaurants() {
    document
        .getElementById("restaurants")
        .scrollIntoView({
            behavior: "smooth"
        });
}

displayRestaurants();
displayCart();
