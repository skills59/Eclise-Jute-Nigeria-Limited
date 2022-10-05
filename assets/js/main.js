
'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    // swithing splash screen to next page after animation is done
var timePeriodInMs = 12000;

setTimeout(function()
    {
        document.getElementById("splashScreen").style.display = "none";
    },
    timePeriodInMs);



    
    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas__menu__wrapper").addClass("show__offcanvas__menu");
        $(".offcanvas__menu__overlay").addClass("active");
    });

    $(".canvas__close, .offcanvas__menu__overlay").on('click', function () {
        $(".offcanvas__menu__wrapper").removeClass("show__offcanvas__menu");
        $(".offcanvas__menu__overlay").removeClass("active");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

})(jQuery);

