$(document).ready(function () {
	/*растягиваем фон на всю ширину блока*/
	function wResize() {
		$("header").css("min-height", $(window).height())
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});
//
	/*tabs*/

	$(".t-phone .wrapper .tab").click(function() {
		$(".t-phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".t-phone .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".h-tabs .wrapper .tab").click(function() {
		$(".h-tabs .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".h-tabs .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".contact-top .wrapper .tab").click(function() {
		$(".contact-top .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".contact-top .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

		$(".footer .wrapper .tab").click(function() {
		$(".footer .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".footer .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

		/*stellars*/
			$.stellar({
				responsive: true,
				horizontalOffset: 60
			});

		/*owlcarousel*/	

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }

});

$(".owl-prev, .owl-next").html(""); // скрываем убираем дефолтные кнопки карусели


		/*magnific-popup*/
		$('.popup').magnificPopup({
			type:'image'
		});

		/*animate css*/
		$('.h-descr h1').addClass('wow flash');
		$('.footer h2').addClass('wow flash');
	
		/*wow*/
		new WOW().init();

});


