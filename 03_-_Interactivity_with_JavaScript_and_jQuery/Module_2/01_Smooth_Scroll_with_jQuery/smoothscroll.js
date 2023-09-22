// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

$('nav ul li a').on('click', function() {

    let thisSection = $(this).attr('href');
    let thisLink = $(this);

    $('html, body').stop().animate( {
        scrollTop: $(thisSection).offset().top -200 },
        800, "easeOutCirc", function() {
            $('nav ul li a').removeAttr('class');
            $(thisLink).addClass("selected");
        } );
} );