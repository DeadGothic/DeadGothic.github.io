$(document).ready(function () {
//плагин owlcarousel section slider
	$(".owl-carousel__main").owlCarousel({
		loop:true,
		nav:true,
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
			1100:{
				items:1
			}
		}
	});

//плагин owlcarousel section novelties	
	$(".owl-carousel__novelties").owlCarousel({
		loop:true,
		nav:true,
		responsiveClass:true,
		smartSpeed:1700,
		navText: ['',''],		
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

	//плагин owlcarousel section factory
		$(".owl-carousel__factory").owlCarousel({
		loop:true,
		nav:true,
		responsiveClass:true,
		smartSpeed:1700,
		navText: ['',''],					
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