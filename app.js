const items = [
    {
        id: 1, 
        title: "Candide Thovex 2.0 Skis",
        category: "skis",
        price: 599.99,
        img: "./images/candide-2.0.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores enim modi quis consectetur debitis ipsum eos, id mollitia pariatur.`
        
    },
    {
        id: 2, 
        title: "Candide Thovex 3.0 Skis",
        category: "skis",
        price: 699.99,
        img: "./images/candide3.0.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores enim modi quis consectetur debitis ipsum eos, id mollitia pariatur.`
    },
    {
        id: 3, 
        title: "Jones Storm Chaser Snowboard",
        category: "snowboards",
        price: 799.99,
        img: "./images/storm-chaser.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores enim modi quis consectetur debitis ipsum eos, id mollitia pariatur.`
    },
    {
        id: 4, 
        title: "Jones Mountain Twin Snowboard",
        category: "snowboards",
        price: 550.99,
        img: "./images/mountain-twin.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores enim modi quis consectetur debitis ipsum eos, id mollitia pariatur.`
    },
    {
        id: 5, 
        title: "Look Pivot 12 Ski Bindings",
        category: "bindings",
        price: 299.99,
        img: "./images/look-pivot.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores enim modi quis consectetur debitis ipsum eos, id mollitia pariatur.`
    },
    {
        id: 6, 
        title: "Union Force Snowboard Bindings",
        category: "bindings",
        price: 299.99,
        img: "./images/union-force-bindings.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores enim modi quis consectetur debitis ipsum eos, id mollitia pariatur.`
    },
];

// Variables 

// populate products
const sectionCenter = document.querySelector('.section-center');

// filter products
const filterBtns = document.querySelectorAll('.filter-btn');

//  navbar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// cart
const cartItemsE1 = document.querySelector('.cart-items');
const subtotalEl = document.querySelector(".subtotal");

// video vars
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');





// Event listerners -- Load items

navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links');
});

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(items);
});

// video

btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }
    else{
        btn.classList.remove('slide');
        video.play();
    }
})

// preloader

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function (){
    preloader.classList.add("hide-preloader");
})

// filter items

filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const itemCategory = items.filter(function(menuItem) {
            if(menuItem.category === category) {
                return menuItem;
            }
        });
        // console.log(itemCategory);
        if(category === 'all') {
            displayMenuItems(items)
        } else {
            displayMenuItems(itemCategory)
        }
    });
});



// functions

// Populate products

function displayMenuItems (menuItems) {
    let displayMenu = menuItems.map(function(item){
        // console.log(item);

         return `<article class="menu-item">
                    <img src=${item.img} class="photo" alt=${item.title}>
                    <div class="item-info">
                        <header>    
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                        <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
}





// populate products 2 ** Not working

// function renderProducts (){
//     items.forEach((item) => {
//         sectionCenter.innerHTML += `
//                 <article class="menu-item">
//                     <img src=${item.img} class="photo" alt=${item.title}>
//                     <div class="item-info">
//                         <header>    
//                             <h4>${item.title}</h4>
//                             <h4 class="price">$${item.price}</h4>
//                         </header>
//                         <p class="item-text">${item.desc}</p>
//                         <button class="add-to-cart">Add to Cart</button>
//                     </div>
//                 </article>
//                 `;
//     });
// };




// add to cart
let cartArray = [];

let carts = document.querySelectorAll('.add-to-cart');

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log('added to cart');
    })
}

function addToCart(id) {
     // check if product already exsists in cart
     if (cartArray.some((item) => item.id === id)){
         alert("Product already in cart")
     } else{
        const product = item.find((item) => item.id === id);
   
    
        cartArray.push({
            ...item, 
            numberOfUnits: 1,
        });
        // console.log(product);

     }

     updateCart();
    
    
}

// update cart

function updateCart() {
    renderCartItems();
    renderSubtotal();
}

//  render cart items

function renderCartItems (cartItems) {
    let displayCart = cartItems.map(function(item){
        // console.log(item);

         return `
         <div class="cart-item-info">
            <img src="${item.img}" class="cart-photo" alt="${item.name}">
                <header>    
                    <h4>${item.name}</h4>
                    <h4 class="cart-price">${item.price}</h4>
                </header>
                <header class="cart-quantity">
                <h4 class="cart-item-text">Quantity</h4>
                <div class="quantity">
                  <button class="btn-minus">-</button>
                  <div class="number">${item.numberOfUnits}</div>
                  <button class="btn-plus">+</button>           
              </div>
                <!-- <h4 class="cart-quantity">1</h4> -->
                </header>
                <button class="remove-from-cart">Remove</button>
            </div>`;
    });
    displayCart = displayCart.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayCart;
}

// function renderCartItems() {
//     cartItemsE1.innerHTML = ""; // clear cart elements
//     cart.forEach((product) => {
//         cartItemsE1.innerHTML += `
//         <div class="cart-item-info">
//             <img src="${product.imgSrc}" class="cart-photo" alt="${product.name}">
//                 <header>    
//                     <h4>${product.name}</h4>
//                     <h4 class="cart-price">${product.price}</h4>
//                 </header>
//                 <header class="cart-quantity">
//                 <h4 class="cart-item-text">Quantity</h4>
//                 <div class="quantity">
//                   <button class="btn-minus">-</button>
//                   <div class="number">${product.numberOfUnits}</div>
//                   <button class="btn-plus">+</button>           
//               </div>
//                 <!-- <h4 class="cart-quantity">1</h4> -->
//                 </header>
//                 <button class="remove-from-cart">Remove</button>
//             </div>
//         `
//     })
// }

function renderSubtotal() {
    let totalPrice = 0,
    totalItems = 0;

    cart.forEach((product) => {
        totalPrice += product.price * product.numberOfUnits;
        totalItems += product.numberOfUnits;
    });

    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    total
}

// cart array

let cart = [];

// Sidebar

// /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  