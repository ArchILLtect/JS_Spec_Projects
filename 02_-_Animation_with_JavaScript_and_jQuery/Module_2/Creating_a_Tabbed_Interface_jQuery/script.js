// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

(function() {
    $('#tabs > ul > li > a').on('click', function() {
        $('#tabs > ul > li > a').css({ background: "#A2A2A2", color: "#CECECE" });
        $(this).css( { background: "#EAEAEA", color: "#333" } );
        const thisTab = $(this).attr("href");
        $('#tabs > div:visible').fadeOut(200, function() {
            $(thisTab).fadeIn(200)
        })
    })
}())

