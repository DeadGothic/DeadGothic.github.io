$(document).ready(function () {
	/*burger*/
	$('#nav-icon3').click(function(){
			$(this).toggleClass('open');
			$(".nav").slideToggle();
			return false;		
		});
	
});