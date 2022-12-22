function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll('.cart-item');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');

  let totalPrice = 0;

  cartItems.forEach(function (item) {
    const amountEl = item.querySelector('[data-counter]').innerHTML;
    const priceEl = item.querySelector('.price__currency').innerHTML;

    const currentPrice = parseInt(amountEl) * parseInt(priceEl);
    totalPrice += currentPrice;
  })
 
  totalPriceEl.innerHTML = totalPrice;

  if (totalPrice > 0){
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add('none');
  }

  if (totalPrice >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerHTML = 'бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerHTML = '250 ₽';
  }
}