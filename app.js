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
        img: "./images/candide-3.0.png",
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


const sectionCenter = document.querySelector('section-center');



const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links');
});

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(items);
});

function displayMenuItems (menuItems) {
    let displayMenu = menuItems.map(function(item){
        // console.log(item);

         return `<article class="menu-item">
                    <img src=${item.img} class="photo" alt=${item.title}>
                    <div class="item-info">
                        <header>    
                            <h4>${item.title}</h4>
                            <h4 class=${item.price}>$15</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
}