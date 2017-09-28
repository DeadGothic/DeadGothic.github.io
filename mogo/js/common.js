$(document).ready(function () {

//owl-carousel
	$(".owl-carousel").owlCarousel({
		loop:true,
		nav:true,
		smartSpeed:700,
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
	
});