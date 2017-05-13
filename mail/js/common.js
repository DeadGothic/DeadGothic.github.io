$(document).ready(function () {
	/*растягиваем фон на всю ширину блока*/
	function wResize() {
		$("header").css("height", $(window).height())
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});
//
	
});