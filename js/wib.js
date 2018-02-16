jQuery(document).ready(function () {
    //remove site description on mobile
    var $ = jQuery;
    $(window).on('resize', function () {
        if ($(window).width() <= 799) {
            $('.site-description').addClass('screen-reader-text');
        }
    });
    //Map Scroll Control For A Smooth User Experience
    $('#map').addClass('scrolloff'); // set the mouse events to none when doc is ready
    $('#overlay').on("mouseup", function () { // lock it when mouse up
        $('#map').addClass('scrolloff');
        //somehow the mouseup event doesn't get call...
   });
    $('#overlay').on("mousedown", function () { // when mouse down, set the mouse events free
        $('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () { // becuase the mouse up doesn't work... 
        $('#map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        // or you can do it on some other event
    });
    
    //Handle The Form Button
    var form = $("#wib_contact_apply, #wib_welcome_form"); //define the form or container
    var button = $("button.apply"); //define the trigger
    var scrollToForm = function() {
        $('html, body').animate({
            scrollTop: form.offset().top
        }, 1500); 
    }
    var openForm = function() {
        form.slideDown();
        form.css("margin-bottom","4.4rem");
    };
    form.hide();
    button.click( function() {
        form.css("margin-bottom","4.4rem");
        form.slideDown();
        scrollToForm();
    });
});