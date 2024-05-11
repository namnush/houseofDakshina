let searchForm = document.querySelector('.search-form');
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');


document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

var swiper = new Swiper(".product-slider", { 
    loop: true, 
    spaceBetween: 20, 
    
    autoplay: { 
        delay: 7500,
         disableOnInteraction: false,
         },
         
         breakpoints: { 
            0: { 
                slidesPerView: 1,
               },
            768: {
                 slidesPerView: 2, 
                }, 
            1020: { 
                slidesPerView: 3,
             },
             },
             });


 iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
 })