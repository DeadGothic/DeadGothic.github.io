  $(document).ready(function() {
      
  	//плагин mmenu
      $("#my-menu").mmenu({
		extensions:[ 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position  : 'right'
		}				
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
	$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function () {
	$('.hamburger').removeClass('is-active');     	
      });

	//плагин owlcarousel
	$(".carousel-services").owlCarousel({
		loop:true,
		nav:true,
		smartSpeed:700,
		navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"</i>'],
		responsiveClass:true,
		responsive: {
			0:{
				items:1
			},
			800:{
				items:2
			},
			1100:{
				items:3
			}
		}
	});

		function carouselService() {
		$('.carousel-services__item').each(function() {
			var ths = $(this);
			var thsh = ths.find('.carousel-services__content').outerHeight();
			ths.find('.carousel-services__img1').css('min-height', thsh);
			ths.find('.carousel-services__img2').css('min-height', thsh);
			ths.find('.carousel-services__img3').css('min-height', thsh);
		});
	}carouselService();	

		//плагин owlcarousel в отзывах
		$(".owl-carousel2").owlCarousel({
			loop:true,
			smartSpeed:700,
			nav:false,
			//autoHeight:true,
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

		$(".owl-carousel3").owlCarousel({
			loop:true,
			smartSpeed:700,
			nav:true,
			dots:false,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"</i>'],
			responsive: {
				0:{
					items:1
				},
				800:{
					items:2
				},
				1100:{
					items:4
				}				
			}			
		});

		// плагин selectize

	$('select').selectize({});

	//E-mail Ajax Send
	$("form.call").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find(".success").addClass("active").css("display","flex").hide().fadeIn();
			setTimeout(function() {
				$(th).find(".success").removeClass("active").fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	// отображаем кнопку "Вверх"
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$(".topbutton").addClass("active");
		} else {
			$(".topbutton").removeClass("active");
		}
	});

  });