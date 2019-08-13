'use strict';

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach(function (elem) {
   elem.addEventListener('change', function () {
       if (this.checked) {
           this.nextElementSibling.classList.add('checked');
       } else {
           this.nextElementSibling.classList.remove('checked');
       }
   });
});

const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const btnClose = document.querySelector('.cart-close');
const countGoods = document.querySelector('.counter');

btnCart.addEventListener('click', function () {
   modalCart.style.display = 'flex';
   document.body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', function () {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});

const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');

cards.forEach((card) => {
   const btn = card.querySelector('button');
   btn.addEventListener('click',  () => {
       const cardClone = card.cloneNode(true);
       cartWrapper.appendChild(cardClone);
       cartEmpty.remove();
       showData();
   });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
    console.log(cardsCart.length);
}