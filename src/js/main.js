var slider = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 27,
    breakpoints: {
        676: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        340: {
            slidesPerView: 1
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
    adaptiveHeight: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    variableWidth: false,
    asNavFor: '.slider-for',
    centerMode: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 710,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 522,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});