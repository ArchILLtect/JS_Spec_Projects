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

$(window).on('load', function() {

    let allLinks = $('nav ul li a');
    let posts = $('section');
    let pageTop;
    let counter = 0;
    let prevCounter = 0;
    let doneResizing;

    let postTops = [];

    resetPagePostion();

    posts.each( function() {
        postTops.push( Math.floor($(this).offset().top ));
    });

    console.log(postTops);

    $(window).on('scroll', function() {

        pageTop = $(window).scrollTop() + 210;

        if(pageTop > postTops[counter+1]){
            counter++;
           // console.log(`scrolling down ${counter}`);
        } else if (counter > 0 && pageTop < postTops[counter]) {
            counter--;
           // console.log(`Scrolling up ${counter}`);
        }

        if(counter != prevCounter) {
            $(allLinks).removeAttr('class');
            $(allLinks).eq(counter).addClass('selected');
            prevCounter = counter;
        }
    });
    $(window).on('resize', function() {

        clearTimeout(doneResizing);
        doneResizing = setTimeout( function() {
            resetPagePostion();
        }, 500);
    });
    function resetPagePostion() {
        postTops = [];
        posts.each( function() {
            postTops.push( Math.floor($(this).offset().top ));
            
        });

        let pagePosition = $(window).scrollTop() + 210;
        counter = 0;

        for( i=0; i < postTops.length; i++ ) {
            if( pagePosition > postTops[i] ) { counter++; }
        }

        counter--;

        $(allLinks).removeAttr('class');
        $(allLinks).eq(counter).addClass('selected');
    }
});