const products = [
    {
      name: 'Sony Playstation 5',
      url: 'images/playstation_5.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung Galaxy',
      url: 'images/samsung_galaxy.png',
      category: 'smartphones',
      price: 399.99,
    },
    {
      name: 'Cannon EOS Camera',
      url: 'images/cannon_eos_camera.png',
      category: 'cameras',
      price: 749.99,
    },
    {
      name: 'Sony A7 Camera',
      url: 'images/sony_a7_camera.png',
      category: 'cameras',
      price: 1999.99,
    },
    {
      name: 'LG TV',
      url: 'images/lg_tv.png',
      category: 'televisions',
      price: 799.99,
    },
    {
      name: 'Nintendo Switch',
      url: 'images/nintendo_switch.png',
      category: 'games',
      price: 299.99,
    },
    {
      name: 'Xbox Series X',
      url: 'images/xbox_series_x.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung TV',
      url: 'images/samsung_tv.png',
      category: 'televisions',
      price: 1099.99,
    },
    {
      name: 'Google Pixel',
      url: 'images/google_pixel.png',
      category: 'smartphones',
      price: 499.99,
    },
    {
      name: 'Sony ZV1F Camera',
      url: 'images/sony_zv1f_camera.png',
      category: 'cameras',
      price: 799.99,
    },
    {
      name: 'Toshiba TV',
      url: 'images/toshiba_tv.png',
      category: 'televisions',
      price: 499.99,
    },
    {
      name: 'iPhone 14',
      url: 'images/iphone_14.png',
      category: 'smartphones',
      price: 999.99,
    },
  ];

const productWrapper = document.getElementById('products-wrapper');
const checkBoxes = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartCount = document.getElementById('cart-count');

let cartItemCount = 0;

let createProductElement = (product) => {
    const productElement = document.createElement('div');
    productElement.className = 'item space-y-2';
    productElement.innerHTML = `<div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
    <img src="${product.url}" alt="${product.name}" class="w-full h-full object-cover">
    <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center group-hover:translate-y-0 py-2 translate-y-full transition">Add to Cart</button>
    </div>
    <p class="text-xl">${product.name}</p>
    <strong>$${product.price.toLocaleString()}</strong>`;

    productElement.querySelector('.status').addEventListener('click',updateCart);

    return productElement;
}

let updateCart = e => {
    const statusEle = e.target;
    if (statusEle.classList.contains('added')) {
        statusEle.classList.remove('added');
        statusEle.innerText = 'Add to Cart';
        statusEle.classList.add('bg-black');
        statusEle.classList.remove('bg-red-600');
        cartItemCount--;
    } else {
        statusEle.classList.add('added');
        statusEle.innerText = 'Remove from Cart';
        statusEle.classList.remove('bg-black');
        statusEle.classList.add('bg-red-600');
        cartItemCount++;
    }

    cartCount.innerText = cartItemCount.toString();
}

let filterProducts = e => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const checkedCategories = Array.from(checkBoxes).filter((check) => check.checked).map((check) => check.id);

    productElements.forEach((productElement, index) => {
        const product = products[index];

        const matchedSearch = product.name.toLowerCase().includes(searchTerm);
        const IsInChecked = checkedCategories.length === 0 || checkedCategories.includes(product.category);

        if (matchedSearch && IsInChecked) {
            productElement.classList.remove('hidden');
        } else {
            productElement.classList.add('hidden')
        }
    });
}

const productElements = [];

filtersContainer.addEventListener('change',filterProducts)
searchInput.addEventListener('input',filterProducts)

products.forEach((product) => {
    const productElement = createProductElement(product);
    

    productElements.push(productElement);
    productWrapper.appendChild(productElement)
});

