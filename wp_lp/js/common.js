$(document).ready(function () {

//paralax	
$('.parallax-window').parallax({imageSrc: 'img/background.jpg'});
    $(".loader_inner").fadeOut('slow'); 
    $(".loader").delay(400).fadeOut();
});






$(document).ready(function() {
  $('.popup').magnificPopup({type:'image'});
})


//присваиваем класс active
$(document).ready(function () {
	$(".portfolio li").click(function() {
		$(".portfolio li").removeClass("active");
		$(this).addClass("active");
	});
});


$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );