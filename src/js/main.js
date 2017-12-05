var slider = new Swiper('.swiper-container', {
    slidesPerView: 3,
    breakpoints: {
        600:{
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev'
    }
});