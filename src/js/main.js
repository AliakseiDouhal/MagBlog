(function () {
    var slider = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
            676: {
                slidesPerView: 2
            }
        },
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev'
        }
    });


   /* var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        centeredSlides: false,
        slidesPerView: 4,
        noSwiping: true,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop[0].controller.control = galleryThumbs;
    galleryThumbs[1].controller.control = galleryTop;*/
    var galleryTop = new Swiper('.gallery-top', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
}());