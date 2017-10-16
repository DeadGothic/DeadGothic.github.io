$(function() {
	//magnific popup
	$(document).ready(function() {
	  $('.visibile-popup').magnificPopup();
	  $('.header-top, .h1, .header-title, .header-main, .h3, .btn-wrap').css({'opacity' : '1'});
	});


	//небольшая анимация
	$(document).ready(function(){
	  $('.header-top, .h1, .header-title, .header-main, .h3, .btn-wrap').css({'opacity' : '1'});
	});	


	// показываем форму ОК  и через 10 секунд даем возможность регистрироваться заново
	$(document).ready(function(){
	$('.global-btn').click(function() {
		$('.form__group, .form__title').css({'display' : 'none'});
		$('.thanks').css({'display' : 'block'});
		setTimeout(function(){
		$('.thanks').css({'display' : 'none'});
		$('.form__group, .form__title').css({'display' : 'block'});
	}, 10000);
	});
	});	

	
});

