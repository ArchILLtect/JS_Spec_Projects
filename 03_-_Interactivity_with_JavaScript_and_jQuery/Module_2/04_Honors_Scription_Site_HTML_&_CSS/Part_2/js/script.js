// Smooth Scroll

(function() {

    // NavBar
    $('nav ul li a').on('click', function() {

        let thisSection = $(this).attr('href');
    
        $('html, body').stop().animate( {
            scrollTop: $(thisSection).offset().top -200 },
            600, "easeOutCirc" );
    
    } );
    
    //Logo
    $('.logo').on('click', function() {
    
        $('html, body').stop().animate( {
            scrollTop: $('#page').offset().top -200 },
            600, "easeOutCirc" );
    
    } );
}());

// Flexslider

$(window).on('load', function() {
    $('.flexslider').flexslider(
        {
            animation: "slide",
            slideshowSpeed: 2000,
            pauseOnHover: true,
        }
    );
});


// Tabs

(function() {
    $('#tabs > ul > li > a').on('click', function() {
        $('#tabs > ul > li > a').css({ background: "var(--tea-green)", color: "black" });
        $(this).css( { background: "var(--tea-green-light)", color: "black" } );
        const thisTab = $(this).attr("href");
        $('#tabs > div:visible').fadeOut(200, function() {
            $(thisTab).fadeIn(200);
        });
    });
}());

// Content Rotator

(function(){
	"use strict";
	
	let counter = 1;

	function contentRotator() {
		$(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function(){

			if( $(this).is("#rotator blockquote:last-child") ) {
				setTimeout( function() {
					$(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function() {
						counter = 1;
						contentRotator();
					} );
				}, 6000 );
			} else {
				setTimeout ( function() {
					$(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function() {
						counter ++;
						contentRotator();
					});
				}, 6000 );
			}
		});
	};
contentRotator();
}());

// Features Rotator 


