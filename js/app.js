/*Burger Icon*/
const burger = document.querySelector('.burger');
const items = document.querySelectorAll('.item');
burger.addEventListener('click', ()=>{
  burger.classList.toggle('active');
  items.forEach((item)=>{
    item.classList.toggle('active')
  });
});
