$(document).ready(function () {

//slic-slider
  $('.about-slider').slick({});

  $(".nav-link").click(function() {
  	$(".navigation-mobile").toggleClass("navigation-mobile__active");
  });

    $(".navigation-close").click(function() {
  	$(".navigation-mobile").toggleClass("navigation-mobile__active");
  });
});