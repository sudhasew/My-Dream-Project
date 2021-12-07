let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Lotus Printed Bag",
    tag: "handbag",
    price: 45,
    inCart: 0,
  },
  {
    name: "Cotton Leather Bag",
    tag: "leatherbag",
    price: 79,
    inCart: 0,
  },
  {
    name: "Crossbody Bag",
    tag: "crossbodybag",
    price: 35,
    inCart: 0,
  },
  {
    name: "Polkadots Printed Bag",
    tag: "totebag",
    price: 50,
    inCart: 0,
  },
  {
    name: "Flowers Printed Bag",
    tag: "backpack",
    price: 50,
    inCart: 0,
  },
  {
    name: "Cats Printed Bag",
    tag: "bigbackpack",
    price: 50,
    inCart: 0,
  },
  {
    name: "Green Crossbody Bag",
    tag: "luxurybag",
    price: 45,
    inCart: 0,
  },
  {
    name: "Green Color Printed Bag",
    tag: "crossbodyhandbag",
    price: 40,
    inCart: 0,
  },
];
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  // console.log("The product clicked is", product);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
  // console.log("The product price is", product.price);
  let cartCost = window.localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
  console.log("My total cart cost is", product.price + cartCost);
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `<div class="product">
           <ion-icon name="close-circle-outline"></ion-icon>
           <img src="./assets/${item.tag}.jpeg">
           <span>${item.name}</span> 
           </div>
           <div class="price">$${item.price}.00</div>
           <div class="quantity">
           <ion-icon name="arrow-dropleft-circle"></ion-icon>
           <span>${item.inCart}</span>
           <ion-icon name="arrow-dropright-circle"></ion-icon>
           </div>
           <div class="total">
           $${item.inCart * item.price}.00
           </div>
           `;
    });
    productContainer.innerHTML += `<div class="basketTotalContainer">
    <h4 class="basketTotalTitle">Basket Total </h4>
    <h4 class="basketTotal">$${cartCost}.00`;
  }
}
onLoadCartNumbers();
displayCart();
