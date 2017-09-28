$(document).ready(function() {

    setupGenplanPopup();

    /*coverflow-slider*/
    $('#jsCoverflowGall').sliderCoverlow();

    /*owl-carousel*/
    /* $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        smartSpeed:700,
        navText: ['',''],
        responsiveClass:true,
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
    });*/

    //animatia
    //alert("привет");
    //aнимация логотипа.
    $(".header .logo").addClass("logo-animate").css( {'opacity': '1', 'transform': 'translateY(0)','transition': 'all 1s ease'});
    //анимация текста под логотипом
    $(".header .h1,.header p").addClass("content-animate").css( {'opacity': '1', 'transform': 'translateY(0)','transition': 'all 1.2s ease'});
    //анимация секции about
    $(window).scroll (function() {
        if ($(window).scrollTop() >=300){
            $('.about-img').addClass('about-animate').css( {'opacity': '1', 'transform': 'translateY(0)'});
        }
    //анимация секции logo2
        if ($(window).scrollTop() >=650){
            $('.logo2').addClass('logo2-animate').css( {'opacity': '1', 'transform': 'translateX(0)'});
        } 
    //анимация секции location
        if ($(window).scrollTop() >=1350){
            $('.location-img').addClass('location-img-animate').css( {'opacity': '1', 'transform': 'translateY(0)'});
        }

    });

});




/*скрипты с полянка 44*/
$(document).ready(function() {

    $('#jsSlider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        nextArrow: $('#jsNextSlide'),
        prevArrow: $('#jsPrevSlide'),
        autoplay: true,
        autoplaySpeed: 5000
    });

    $("#jsApartments").mCustomScrollbar({
        axis:"y",
        theme:"rounded-dots",
        scrollButtons: {
            enable : false
        }
    });

    $(window).scroll(function () {
        if($(window).scrollTop() > 500) {
            $('#jsScrollUp').show();
        }
        else {
            $('#jsScrollUp').hide();
        }
    });

    $(window).scroll(function () {
        if($(window).scrollTop() > 200) {
            $('.header-fixed').show();
        }
        else {
            $('.header-fixed').hide();
        }
    });

    var slider_groups = $(".build_wrap");
        $.each(slider_groups, function(){
        $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 200,
        mainClass: 'mfp-for-build',
        gallery:{
            enabled:true,
        },
        
        
        callbacks: {
                beforeOpen: function(){
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated fadeIn');
                },
                buildControls: function() {
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
            }

        });
    });


    var start = 0;
    $(document).on("click", ".more", function(){
        var build_row = $(".build_row");
        var length = build_row.length;
        
        for(var i=0; i<length; i++){
            if (i == start)
            {
                $(build_row[i]).slideToggle();
                start++;
                if(start == length){
                    $(".more").hide();
                }
                $('html, body').animate({scrollTop: ($(build_row[i]).offset().top)-60}, 2000);
                return false;
            }
        }

        return false;
        
    });

    $(window).on("resize", function(){
        setPriceTableCellWidth();
    });

});

$(window).load(function () {
    setupFilters();
    setupScrollUp();
    setPriceTableCellWidth();
});

function setupScrollUp() {
    $("#jsScrollUp").click(function() {
        $("html, body").animate({ scrollTop : 0 }, 500);
    });
}

// set table cell width
function setPriceTableCellWidth() {
    var $th = $('#jsHeadingTable th'),
        $body = $('#jsApartmentsTable tr');

    $th.each(function (i, el) {
        var w = $(this).width();
        $body.find('td:eq('+i+')').css('width', w+'px');
    });
}

// Setup filters
function rank(str) {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
function setupFilters() {
    var $table   = $("#jsApartmentsTable");
    var $rows = $table.find('tr:has(td)');

    var $filters = $("#jsFilters");

    function showNumbers(parent,min,max) {
        parent = $filters.find(parent + " .counters");
        parent.find(".f-from").html(min);
        parent.find(".f-to").html(max);
    }

    function sortTable() {
        var area    = $filters.find(".f-area .slider").slider("option","values"),
            floor    = $filters.find(".f-floor .slider").slider("option","values");
            rooms    = $filters.find(".f-rooms .slider").slider("option","values");

        $rows.each(function() {
            var $this = $(this);
            var areaVal     = $this.data('farea'),
                floorVal     = $this.data('ffloor'),
                roomsVal = $this.data('frooms');
            if (
                ((areaVal < area[0]) || (areaVal > area[1]))
                ||
                ((floorVal < (floor[0])) || (floorVal > (floor[1])))
                ||
                ((roomsVal < (rooms[0])) || (roomsVal > (rooms[1])))
            ) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
       
    }

    var $floor = $('.filter.f-floor'),
        $area = $('.filter.f-area'),
        $rooms = $('.filter.f-rooms');

    var floor = {min: $floor.data('min'), max: $floor.data('max')},
        area = {min: $area.data('min'), max: $area.data('max')},
        rooms = {min: $rooms.data('min'), max: $rooms.data('max')};

    $filters.find(".f-area .slider").slider({
        range: true,
        min: area.min,
        max: area.max,
        values: [area.min, area.max],
        slide: function(e,ui) {
            showNumbers(".f-area",ui.values[0],ui.values[1]);
        },
        change: function(e,ui) {
            sortTable();
        }
    });
    showNumbers(".f-area",$filters.find(".f-area .slider").slider("values",0),$filters.find(".f-area .slider").slider("values",1));

    $filters.find(".f-floor .slider").slider({
        range: true,
        min: floor.min,
        max: floor.max,
        values: [floor.min, floor.max],
        slide: function(e,ui) {
            showNumbers(".f-floor",ui.values[0],ui.values[1]);
        },
        change: function(e,ui) {
            sortTable();
        }
    });
    showNumbers(".f-floor",$filters.find(".f-floor .slider").slider("values",0),$filters.find(".f-floor .slider").slider("values",1));

    $filters.find(".f-rooms .slider").slider({
        range: true,
        min: rooms.min,
        max: rooms.max,
        values: [rooms.min, rooms.max],
        slide: function(e,ui) {
            showNumbers(".f-rooms",ui.values[0],ui.values[1]);
        },
        change: function(e,ui) {
            sortTable();
        }
    });
    showNumbers(".f-rooms",$filters.find(".f-rooms .slider").slider("values",0),$filters.find(".f-rooms .slider").slider("values",1));

}


/*разворачиваем попап*/
 function setupGenplanPopup(){
 var genplan = $(".genplan_popup");
 $(document).on("click", "#jsShowPopupPlans", function(e) {
  e.preventDefault();
  genplan.addClass("show");
  setTimeout(function() {
   genplan.addClass("active");
  }, 1000);
 });
 $(document).on("click", "#jsCloseGenplan", function() {
  genplan.removeClass("active");
  setTimeout(function() {
   genplan.removeClass("show");
  }, 800);
 });
}
