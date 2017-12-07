var slider = new Swiper('.swiper-container', {
    slidesPerView: 3,
    breakpoints: {
        1056:{
            slidesPerView: 2
        },
        676:{
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev'
    }
});