
//common js
$(document).ready(function () {

//плагин equalHeights
$('.advantages-item').equalHeights();

//плагин owlcarousel
$(".slider-gostomel").owlCarousel({
	loop:true,
	nav:true,
	smartSpeed:1000,
	navText: ['',''],
	responsiveClass:true,
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

//пульс на кнопку
$('#btn--header').addClass('animated pulse');

//плавный скрол по странице к нужному id
$("a[href*='#reservation']").mPageScroll2id();


});

//убираем маску на видео

$(document).ready(function () {
	$(".relation__btn,.relation__mask").click(function() {
		$(".relation__content").addClass("active");	
	});
});

//таймер
$(document).ready(function () {
	var clock = $('.your-clock').FlipClock({
		countdown : true
});
	clock.setTime(1200);
	clock.setCountdown(true);
	clock.start();

});