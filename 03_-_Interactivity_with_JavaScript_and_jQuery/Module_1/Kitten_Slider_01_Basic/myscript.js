// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

$(window).on('load', function() {
    $('.flexslider').flexslider(
        {
            animation: "slide",
            slideshowSpeed: 2000,
            direction: "vertical",
            reverse: true,
            pauseOnHover: true,
        }
    );
});