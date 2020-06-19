/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  // Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    // var select = document.getElementById('items');
    var option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.

var addItem = document.getElementById('catalog');

addItem.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Prevent the page from reloading
  event.preventDefault();

  var itemsToCart = event.target.items.value;
  var quantityToCart = event.target.quantity.value;
  cart.addItem(itemsToCart, quantityToCart);
  console.log('cart as is: ', cart);
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  console.log('cart from addtocart', cart);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
// cartContents id
console.log('cart items?',this.cart.items);
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var products = 'test';
  var quantity = 0;
  //establish variable to store in memory
  //div? to store createelement
  console.log('cart from preview cart', cart);
  for(var i = 0; i < Cart.length; i++){
    products = Cart[i];
    console.log('from for loop', Cart[i]);
  }
  var cartContents = document.getElementById('cartContents');
  var cartTag = document.createElement('p');
  cartTag.textContent = products + ', ' + quantity;
  cartContents.appendChild(cartTag);
  console.log('cart items in preview?', cart);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
