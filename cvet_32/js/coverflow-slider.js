(function($) {
    $.fn.sliderCoverlow = function(params) {
        var defaults = {
                delay      : 1000,
                prevButton : ".coverflow-prev",
                nextButton : ".coverflow-next",
                current    : 0
            };
        var settings = $.extend({}, defaults, params);
        return this.each(function() {
            var gallery        = $(this);
            var slides         = gallery.find(".coverflow_slide");
            var maxLength      = slides.length;
            var isChangeSlides = false;
            var current        = settings.current;
            var delayTr        = settings.delay/1000;
            var prevButton     = gallery.find(settings.prevButton);
            var nextButton     = gallery.find(settings.nextButton);
            slides.removeClass('current');
            if(current == 0) {
                prevButton.addClass("disabled");
                nextButton.removeClass("disabled");
            }else if(current >= maxLength - 1) {
                nextButton.addClass("disabled");
                prevButton.removeClass("disabled");
            }else{
                prevButton.removeClass("disabled");
                nextButton.removeClass("disabled");
            }
            for( var i = 0, k = current, index = 10; i < maxLength; i++, index--){
               if(k==current){
                slides.eq(k).addClass('current').css({
                                "display"   : "block",
                                "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                                "z-index"   : index
                            });
               }else if(i <= 4){
                slides.eq(k).css({
                                "display" : "block",
                                "z-index" : index,
                                "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                                "transform": "translate3d(0, -" + 28 * i + "px, -" + 24 * i + "px)"
                            });
               }else{
                slides.eq(k).removeAttr('style');
               }
               k++;
               if(k == maxLength){
                k = 0;
               }
            }

            gallery.on("click", settings.nextButton, function(e){
                if(isChangeSlides){
                    return;
                }
                if(current >= maxLength - 1){
                    return;
                }
                isChangeSlides = true;
                for( var i = 0, k = current, index = 10; i < maxLength; i++, index--){
                   if(k==current){
                    slides.eq(k).removeClass('current').css({
                                    "transform": "translate3d(0, 28px, 24px)",
                                    "opacity"  : "0"
                                });
                   }
                   else if(i <= 5){
                    if(i == 1){
                       slides.eq(k).addClass('current');
                    }
                    slides.eq(k).css({
                                    "display" : "block",
                                    "z-index" : index,
                                    "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                                    "transform": "translate3d(0, -" + 28 * (i - 1) + "px, -" + 24 * (i - 1) + "px)"
                                });
                   }else{
                    slides.eq(k).removeAttr('style');
                   }
                   k++;
                   if(k == maxLength){
                    k = 0;
                   }
                }
                current ++;
                if(current == 0) {
                    prevButton.addClass("disabled");
                    nextButton.removeClass("disabled");
                }else if(current >= maxLength - 1) {
                    nextButton.addClass("disabled");
                    prevButton.removeClass("disabled");
                }else{
                    prevButton.removeClass("disabled");
                    nextButton.removeClass("disabled");
                }
                setTimeout(function() {
                    slides.removeClass('current');
                    for( var i = 0, k = current, index = 10; i < maxLength; i++, index--){
                       if(k==current){
                        slides.eq(k).addClass('current').css({
                                        "display" : "block",
                                        "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                                        "z-index" : index
                                    });
                       }else if(i <= 4){
                        slides.eq(k).css({
                                        "display" : "block",
                                        "z-index" : index,
                                        "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                                        "transform": "translate3d(0, -" + 28 * i + "px, -" + 24 * i + "px)"
                                    });
                       }else{
                        slides.eq(k).removeAttr('style');
                       }
                       k++;
                       if(k == maxLength){
                        k = 0;
                       }
                    }
                    isChangeSlides = false;
                }, settings.delay);
            });

            gallery.on("click", settings.prevButton, function(e){
                if(isChangeSlides){
                    return;
                }
                if(current <= 0){
                    return;
                }
                isChangeSlides = true;
                for( var i = 0, k = current-1, index = 10; i < maxLength; i++, index--){
                    if(i == 0){
                        slides.eq(k).addClass('current').css({
                            "display" : "block",
                            "z-index" : index,
                            "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                            "transform": "translate3d(0, 28px, 24px)",
                            "opacity"  : "0"
                        });
                        setTimeout(function() {
                           slides.eq(k).css({
                            "transform": "none",
                            "opacity"  : "1"
                        }); 
                        }, 10);
                    }
                   if(k==current){
                    slides.eq(k).removeClass('current').css({
                                    "display" : "block",
                                    "z-index" : index,
                                    "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                                    "transform": "translate3d(0, -" + 28 * i + "px, -" + 24 * i + "px)"
                                });
                   }
                   else if(i <= 5){
                    slides.eq(k).css({
                                    "display" : "block",
                                    "z-index" : index,
                                    "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                                    "transform": "translate3d(0, -" + 28 * i + "px, -" + 24 * i + "px)"
                                });
                   }else{
                    slides.eq(k).removeAttr('style');
                   }
                   k++;
                   if(k == maxLength){
                    k = 0;
                   }
                }
                current --;
                if(current == 0) {
                    prevButton.addClass("disabled");
                    nextButton.removeClass("disabled");
                }else if(current >= maxLength - 1) {
                    nextButton.addClass("disabled");
                    prevButton.removeClass("disabled");
                }else{
                    prevButton.removeClass("disabled");
                    nextButton.removeClass("disabled");
                }
                setTimeout(function() {
                    slides.removeClass('current');
                    for( var i = 0, k = current, index = 10; i < maxLength; i++, index--){
                       if(k==current){
                        slides.eq(k).addClass('current').css({
                                        "display" : "block",
                                        "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                                        "z-index" : index
                                    });
                       }else if(i <= 4){
                        slides.eq(k).css({
                                        "display" : "block",
                                        "z-index" : index,
                                        "transition": "transform " + delayTr + "s ease, opacity " + delayTr + "s ease",
                                        "transform": "translate3d(0, -" + 28 * i + "px, -" + 24 * i + "px)"
                                    });
                       }else{
                        slides.eq(k).removeAttr('style');
                       }
                       k++;
                       if(k == maxLength){
                        k = 0;
                       }
                    }
                    isChangeSlides = false;
                }, settings.delay);
            });
        });
    }
})(jQuery);