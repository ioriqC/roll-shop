// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');
// console.log(counter);

// btnMinus.addEventListener('click', function () {
//   if (parseInt(counter.innerHTML) > 1) {
//     counter.innerHTML = --counter.innerHTML;
//   }
  
// });

// btnPlus.addEventListener('click', function () {
//   counter.innerHTML = ++counter.innerHTML;
// });

window.addEventListener('click', function (event) {
  let counter;

  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');
  }
  
  if (event.target.dataset.action === 'plus') {
    counter.innerHTML = ++counter.innerHTML;
  }

  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.innerHTML) > 1) {
          counter.innerHTML = --counter.innerHTML;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerHTML) === 1) {
          event.target.closest('.cart-item').remove();
          toggleCartStatus();
          calcCartPriceAndDelivery();
        }    
  }

  if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
    calcCartPriceAndDelivery();
  }
});