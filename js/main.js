let btn = document.querySelector('.menu__btn');
let ul = document.querySelector('.menu__list')


btn.addEventListener('click', ()=>{
  btn.classList.toggle('active');
  ul.classList.toggle('active');
})

ul.addEventListener('click', ()=> {
  ul.classList.remove('active');
})