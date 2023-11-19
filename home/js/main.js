function whitephone(){
let phone = document.getElementById('phone')
phone.style.color = 'white';
}

function orangephone(){
let phone = document.getElementById('phone')
phone.style.color = '#ff8442';
}

// ------------------------SWIPER--------------
const swiper = new Swiper('.sample-slider', {
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 6000,          //add
    slidesPerView: 3,     //add
})

const swiper2 = new Swiper('.slider-two', {
    loop: true,
    autoplay: {
        delay: 0,
        reverseDirection: true,         // added
    },
    speed: 6000,
    slidesPerView: 3,
})



/* Feedback Slideshow JavaScript */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].classList.add("active");
}
/* Feedback Slideshow JavaScript */


const swiper3 = new Swiper('.offer-swiper', {
  autoplay:{
      delay:2000,
      disableOnInteraction: false,
  },
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});


const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('animate__fadeInUp');
    }
  })
})

const hiddenElements = document.querySelectorAll('.animate__animated');
hiddenElements.forEach((el) => observer.observe(el));