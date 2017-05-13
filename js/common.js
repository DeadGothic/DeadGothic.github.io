$(document).ready(function () {

	/*burger*/
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
			$(".top-mnu").slideToggle();
			return false;		
		});

	$(".card").equalHeights();

	$(".section4").waypoint(function() {

		$(".section4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-transformed").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});


	$(".team").equalHeights();

	$(".section6").waypoint(function() {

		$(".section6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-transformed").addClass("team-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});


		$(".owl-carousel").owlCarousel({
			items : 1,
			nav : true,
			navText : "",
			loop : true,
			autoplay : true,
			autoplayHoverPause : true,
			fluidSpeed : 600,
			autoplaySpeed : 600,
			navSpeed : 600,
			dotsSpeed : 600,
			dragEndSpeed : 600
		});

});






















