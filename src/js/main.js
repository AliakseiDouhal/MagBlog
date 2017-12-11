var slider = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 27,
    breakpoints: {
        676: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    },
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev'
    }
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: false,
    asNavFor: '.slider-for',
    centerMode: false,
    focusOnSelect: true
});