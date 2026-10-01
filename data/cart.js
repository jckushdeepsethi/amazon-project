export let cart=JSON.parse(localStorage.getItem('cart')) || [];

export function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addTocart(productId){
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(cartItem.productId == productId)
        matchingItem = cartItem;
  });
  const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
  const deliveryOptionId ='1';
  if(matchingItem){
    matchingItem.quantity+=quantity;
  }
  else{
    cart.push({
      productId,
      quantity,
      deliveryOptionId
    });
  }
  saveToStorage();

}

export function removeFromCart(productId){
  const newCart =[];
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}

export function calculateCartQuantity(){
  let cartQuantity = 0;


  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}
