import { cart , addTocart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
let productsHTML = '';
products.forEach((product)=>{ // each parameter from product saves in this product and which we will use in the function
  // const html = `
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars *10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select class ="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = "${product.id}">
        Add to Cart
      </button>
    </div>
  `;
  // console.log(productsHTML);
})

 document.querySelector('.js-products-grid').innerHTML = productsHTML;
//Now there is no need of product container in the html file
function updateCart(){ //isko cart.js me nhi daal rhe
  let cartQuantity = 0;
  cart.forEach((item)=>{
    cartQuantity += item.quantity;
  });
  
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  console.log(cart);
}
// it will select all quieroes with matching class
document.querySelectorAll('.js-add-to-cart').forEach((button) =>{// button k place pe like k yaa kuch or bhi likh sakte hai
  let addedMessageTimeoutId;
  button.addEventListener('click',()=>{
    // console.log('Added product');
    // console.log(button.dataset.productName);
    const {productId} = button.dataset;
    addTocart(productId);
    updateCart();
    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    addedMessage.classList.add('added-to-cart-visible');
    
    if (addedMessageTimeoutId) {
      clearTimeout(addedMessageTimeoutId);
    }

    const timeoutId = setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
    }, 2000);

    // Save the timeoutId so we can stop it later.
    addedMessageTimeoutId = timeoutId;
    
  });
})