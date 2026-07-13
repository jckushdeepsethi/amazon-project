export const cart=JSON.parse(localStorage.getItem('cart')) || [];

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
  if(matchingItem){
    matchingItem.quantity+=quantity;
  }
  else{
    cart.push({
      productId,
      quantity
    });
  }
  saveToStorage();

}