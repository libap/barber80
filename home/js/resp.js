burger = document.querySelector('.burger');
navbar = document.querySelector('.nav__container');
center = document.querySelector('.center');
right = document.querySelector('.right');




burger.addEventListener('click', ()=>{
center.classList.toggle('v-class-resp');
right.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})