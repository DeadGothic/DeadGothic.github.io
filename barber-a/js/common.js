$(document).ready(function(){
	//var thiss = $(this).find(".mobile-mnu");
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});


});


/*mmenu*/
   $(document).ready(function() {
      $("#my-menu").mmenu({
         
      });
      var API = $("#my-menu").data( "mmenu" );
      
      $(".mobile-mnu").click(function() {
         API.open();
      });

     var API = $("#my-menu").data( "mmenu" );

      $(".mobile-mnu").click(function() {
         API.close();
      });
   });

/*equalHeights*/  

$( document ).ready(function() {
    $('.equa').equalHeights();
}); 


$( document ).ready(function() {
    $('.new-item-text').equalHeights();
}); 

$( document ).ready(function() {
    $('.link-item').equalHeights();
}); 