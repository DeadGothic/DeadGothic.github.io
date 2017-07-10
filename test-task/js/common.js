
//настройки owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
  	loop:true,
  	nav: true,
  	dot:true,
  	smartSpeed:1700,
  	navText: ['',''],
  	responsiveClass:true,
  			responsive: {
			0:{
				items:1
			},
			800:{
				items:1
			},
			1600:{
				items:1
			}
		}
  });

});


//fade для owlcarousel
$(document).ready(function(){
 $('.owl-carousel').fadeTo(2000, 1);
});



//скрипт для бургера-меню
$(document).ready(function () {
	$(".sandwich").click(function() {
		var menu = $(".header-nav__list--wrap");
		$(this).toggleClass("active");
		if(menu.is(":visible")) {
			menu.slideUp();
		} else {
			menu.slideDown();
		}
	})
});

// скрипт для плавающего hedera
$(document).ready(function () {
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // код для прокрутки вниз
       $('.header__top').removeClass('active');
   } else {
      // код для прокрутки вверх
      $('.header__top').addClass('active');
   }
   lastScrollTop = st;
});
});


//Заглушка скрипт не успел написать.
  $('.run-business__item--wrap').on('mouseover', function(){
  $('.run-business__card--wrap .run-business__card--8').css('opacity','1');
  $('.run-business__card--wrap .run-business__card--7').css('opacity','1');
  $('.run-business__card--wrap .run-business__card--6').css('opacity','1');
  $('.run-business__card--wrap .run-business__card--5').css('opacity','1');
})
