

$(document).ready(function() {
    $(".owl-carousel.gallary-owl").owlCarousel({
        //autoplay: true,
        //autoplayTimeout: 3000,
        loop: true,
        nav: true,
        navText: ['',''],
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:3
            },
            1100:{
                items:3
            }
        }
    });

        $(".owl-carousel.reviews-slider-left").owlCarousel({

        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        nav: true,
        navText: ['',''],
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            800:{
                items:1
            },
            1100:{
                items:1
            }
        }
    });

    $(".owl-carousel.reviews-slider-right").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: true,
        navText: ['',''],
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            800:{
                items:1
            },
            1100:{
                items:1
            }
        }
    });       
    //scroll
    $("a[href*='#about-us']").mPageScroll2id();
    $("a[href*='#our-features']").mPageScroll2id();
    $("a[href*='#bu-fromUS']").mPageScroll2id();
    $("a[href*='#gallery']").mPageScroll2id();
    $("a[href*='#products']").mPageScroll2id();
    $("a[href*='#contact']").mPageScroll2id();
    $("a[href*='#blog']").mPageScroll2id();
    $("a[href*='#faqs']").mPageScroll2id();
    $("a[href*='#reviews']").mPageScroll2id();


    //equalHeights
    $('.our-features_block').equalHeights();
    $('.content-block').equalHeights();
    $('.faqs').equalHeights();

   //mobile-mnu
   $(".top-menu_btn").on("click", function(){
    $(".top-line_mnu").toggleClass("top-line_mnu__active");
   })   
});

$(document).ready(function() {
    $("[data-fancybox]").fancybox({
         loop: true,
    });
});


$(document).ready(function(){
var owl = $('.owl-carousel.reviews-slider-left');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});

$(document).ready(function(){
var owl = $('.owl-carousel.reviews-slider-right');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn1').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});