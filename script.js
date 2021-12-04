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
    tag: "handbag",
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
    tag: "handbag",
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
    tag: "handbag",
    price: 50,
    inCart: 0,
  },
  {
    name: "Green Crossbody Bag",
    tag: "handbag",
    price: 45,
    inCart: 0,
  },
  {
    name: "Green Color Printed Bag",
    tag: "handbag",
    price: 40,
    inCart: 0,
  },
];
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers();
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
}
onLoadCartNumbers();
