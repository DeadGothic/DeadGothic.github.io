//скрипт для бургера-меню
$(document).ready(function () {
	$(".sandwich").click(function() {
		var menu = $(".header-nav__list");
		$(this).toggleClass("active");
		if(menu.is(":visible")) {
			menu.slideUp();
		} else {
			menu.slideDown();
		}
	})
});


//скрипт для скрола
// Select all links with hashes
$('.scroll-link')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 10, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  //скрипт для валидации форм

//$("form").on("submit", function () {
// var formID = "#" + $(this).attr("ID");
	$("form").validate({
		rules: {
			name: "required",
			phone: "required"
		},
		messages: {
			name: "а кто имя писать будет?",
			phone: "и телефончик тоже давай,киса!"
		}
	});
//  if($(formID).valid()) {
//		$(this).hide();
//		$(this).parent().find(".successform-form").addClass(".successform-show")
//	}
//	return false;
//});


//скрипт magnificPopup
$(document).ready(function() {
  $('.popup-link').magnificPopup({type:'inline'});
});




