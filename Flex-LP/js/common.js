$(document).ready(function () {
    $(".m-menu-link").click(function() {
  	$(".m-menu").addClass("m-menu__active");
  	 });
        $(".close").click(function() {
  	$(".m-menu").toggleClass("m-menu__active");
  	 });
});

