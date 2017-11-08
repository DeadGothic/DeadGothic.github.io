
$(function() {

	$(document).ready(function(){
		$('.hamburger-icon').click(function(){
		$('.nav-wrap').toggleClass('active');
		});
	//preloader
	setTimeout(function() {
		//alert('привет');
			var preloader = document.getElementById('page-preloader');
			if (!preloader.classList.contains('done'))
			{
				preloader.classList.add('done');
			}
		}, 1000);
	//equalheight
		$('.section3-item').equalHeights();
	});
});




