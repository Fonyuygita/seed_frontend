// Product data array
const products = [
    {
        id: 1,
        name: "Android Phone Pro",
        description: "High-end Android smartphone with advanced features",
        image: "./assets/images/a1.png",
        rating: 4,
        price: 799.99
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        description: "Premium noise-cancelling wireless earbuds",
        image: "./assets/images/a1.png",
        rating: 5,
        price: 149.99
    },
    {
        id: 3,
        name: "Smart Watch",
        description: "Fitness and health tracking smartwatch",
        image: "./assets/images/a1.png",
        rating: 4,
        price: 249.99
    },
    {
        id: 4,
        name: "Laptop Ultra",
        description: "Lightweight and powerful laptop for professionals",
        image: "./assets/images/a1.png",
        rating: 5,
        price: 1299.99
    },
    {
        id: 5,
        name: "Smart Speaker",
        description: "Voice-controlled smart home speaker",
        image: "./assets/images/a1.png",
        rating: 3,
        price: 89.99
    },
    {
        id: 6,
        name: "Tablet Pro",
        description: "High-performance tablet with stylus support",
        image: "./assets/images/a1.png",
        rating: 4,
        price: 499.99
    },
    {
        id: 7,
        name: "Wireless Charger",
        description: "Fast wireless charging pad for all devices",
        image: "./assets/images/a1.png",
        rating: 4,
        price: 39.99
    }
];

// Function to generate star ratings
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
        stars += '⭐';
    }
    return stars;
}

// Function to dynamically generate product cards
function generateProductCards() {
    const productsContainer = document.querySelector('.products');

    // Clear existing content
    productsContainer.innerHTML = '';

    // Map over products array and create cards
    products.forEach(product => {
        // Create product card
        const card = document.createElement('div');
        card.className = 'card';

        // Create picture div
        const picture = document.createElement('div');
        picture.className = 'picture';

        // Create image
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        // Create product name
        const pName = document.createElement('p');
        pName.className = 'Pname';
        pName.textContent = product.name;

        // Create product description
        const desc = document.createElement('p');
        desc.className = 'desc';
        desc.textContent = product.description;

        // Create rating span
        const rating = document.createElement('span');
        rating.textContent = generateStars(product.rating);

        // Create price paragraph
        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = `$${product.price.toFixed(2)}`;

        // Create buy button
        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = 'Buy Now';
        button.addEventListener('click', () => {
            alert(`You clicked Buy Now for ${product.name}`);
        });

        // Append elements to card
        picture.appendChild(img);
        card.appendChild(picture);
        card.appendChild(pName);
        card.appendChild(desc);
        card.appendChild(rating);
        card.appendChild(price);
        card.appendChild(button);

        // Product data array
        const products = [
            {
                id: 1,
                name: "Android Phone Pro",
                description: "High-end Android smartphone with advanced features",
                image: "./assets/images/a1.png",
                rating: 4,
                price: 799.99
            },
            {
                id: 2,
                name: "Wireless Earbuds",
                description: "Premium noise-cancelling wireless earbuds",
                image: "./assets/images/a1.png",
                rating: 5,
                price: 149.99
            },
            {
                id: 3,
                name: "Smart Watch",
                description: "Fitness and health tracking smartwatch",
                image: "./assets/images/a1.png",
                rating: 4,
                price: 249.99
            },
            {
                id: 4,
                name: "Laptop Ultra",
                description: "Lightweight and powerful laptop for professionals",
                image: "./assets/images/a1.png",
                rating: 5,
                price: 1299.99
            },
            {
                id: 5,
                name: "Smart Speaker",
                description: "Voice-controlled smart home speaker",
                image: "./assets/images/a1.png",
                rating: 3,
                price: 89.99
            },
            {
                id: 6,
                name: "Tablet Pro",
                description: "High-performance tablet with stylus support",
                image: "./assets/images/a1.png",
                rating: 4,
                price: 499.99
            },
            {
                id: 7,
                name: "Wireless Charger",
                description: "Fast wireless charging pad for all devices",
                image: "./assets/images/a1.png",
                rating: 4,
                price: 39.99
            }
        ];

        // Function to generate star ratings
        function generateStars(rating) {
            let stars = '';
            for (let i = 0; i < rating; i++) {
                stars += '⭐';
            }
            return stars;
        }

        // Function to dynamically generate product cards
        function generateProductCards() {
            const productsContainer = document.querySelector('.products');

            // Clear existing content
            productsContainer.innerHTML = '';

            // Map over products array and create cards
            products.forEach(product => {
                // Create product card
                const card = document.createElement('div');
                card.className = 'card';

                // Create picture div
                const picture = document.createElement('div');
                picture.className = 'picture';

                // Create image
                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.name;

                // Create product name
                const pName = document.createElement('p');
                pName.className = 'Pname';
                pName.textContent = product.name;

                // Create product description
                const desc = document.createElement('p');
                desc.className = 'desc';
                desc.textContent = product.description;

                // Create rating span
                const rating = document.createElement('span');
                rating.textContent = generateStars(product.rating);

                // Create price paragraph
                const price = document.createElement('p');
                price.className = 'price';
                price.textContent = `$${product.price.toFixed(2)}`;

                // Create buy button
                const button = document.createElement('button');
                button.className = 'btn';
                button.textContent = 'Buy Now';
                button.addEventListener('click', () => {
                    alert(`You clicked Buy Now for ${product.name}`);
                });

                // Append elements to card
                picture.appendChild(img);
                card.appendChild(picture);
                card.appendChild(pName);
                card.appendChild(desc);
                card.appendChild(rating);
                card.appendChild(price);
                card.appendChild(button);

                // Append card to products container
                productsContainer.appendChild(card);
            });
        }

        // Add event listener to search input for filtering products
        function setupSearch() {
            const searchInput = document.querySelector('.search input');

            searchInput.addEventListener('input', function () {
                const searchTerm = this.value.toLowerCase();

                // Filter products based on search term
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm)
                );

                // Clear existing content
                const productsContainer = document.querySelector('.products');
                productsContainer.innerHTML = '';

                // Display filtered products or message if none found
                if (filteredProducts.length > 0) {
                    filteredProducts.forEach(product => {
                        // Create card elements as in generateProductCards function
                        const card = document.createElement('div');
                        card.className = 'card';

                        const picture = document.createElement('div');
                        picture.className = 'picture';

                        const img = document.createElement('img');
                        img.src = product.image;
                        img.alt = product.name;

                        const pName = document.createElement('p');
                        pName.className = 'Pname';
                        pName.textContent = product.name;

                        const desc = document.createElement('p');
                        desc.className = 'desc';
                        desc.textContent = product.description;

                        const rating = document.createElement('span');
                        rating.textContent = generateStars(product.rating);

                        const price = document.createElement('p');
                        price.className = 'price';
                        price.textContent = `$${product.price.toFixed(2)}`;

                        const button = document.createElement('button');
                        button.className = 'btn';
                        button.textContent = 'Buy Now';
                        button.addEventListener('click', () => {
                            alert(`You clicked Buy Now for ${product.name}`);
                        });

                        picture.appendChild(img);
                        card.appendChild(picture);
                        card.appendChild(pName);
                        card.appendChild(desc);
                        card.appendChild(rating);
                        card.appendChild(price);
                        card.appendChild(button);

                        productsContainer.appendChild(card);
                    });
                } else {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results';
                    noResults.textContent = 'No products found matching your search.';
                    productsContainer.appendChild(noResults);
                }
            });
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function () {
            generateProductCards();
            setupSearch();
        });     // Append card to products container
        productsContainer.appendChild(card);
    });
}

// Add event listener to search input for filtering products
function setupSearch() {
    const searchInput = document.querySelector('.search input');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        // Filter products based on search term
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );

        // Clear existing content
        const productsContainer = document.querySelector('.products');
        productsContainer.innerHTML = '';

        // Display filtered products or message if none found
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                // Create card elements as in generateProductCards function
                const card = document.createElement('div');
                card.className = 'card';

                const picture = document.createElement('div');
                picture.className = 'picture';

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.name;

                const pName = document.createElement('p');
                pName.className = 'Pname';
                pName.textContent = product.name;

                const desc = document.createElement('p');
                desc.className = 'desc';
                desc.textContent = product.description;

                const rating = document.createElement('span');
                rating.textContent = generateStars(product.rating);

                const price = document.createElement('p');
                price.className = 'price';
                price.textContent = `$${product.price.toFixed(2)}`;

                const button = document.createElement('button');
                button.className = 'btn';
                button.textContent = 'Buy Now';
                button.addEventListener('click', () => {
                    alert(`You clicked Buy Now for ${product.name}`);
                });

                picture.appendChild(img);
                card.appendChild(picture);
                card.appendChild(pName);
                card.appendChild(desc);
                card.appendChild(rating);
                card.appendChild(price);
                card.appendChild(button);

                productsContainer.appendChild(card);
            });
        } else {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No products found matching your search.';
            productsContainer.appendChild(noResults);
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    generateProductCards();
    setupSearch();
});