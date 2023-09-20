// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

(function(){
	"use strict";
	
	let counter = 1;

	function contentRotator() {
		$(`#container p:nth-child(${counter})`).fadeIn(2000, function(){

			if( $(this).is("#container p:last-child") ) {
				setTimeout( function() {
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function() {
						counter = 1;
						contentRotator();
					} );
				}, 7000 );
			} else {
				setTimeout ( function() {
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function() {
						counter ++;
						contentRotator();
					});
				}, 7000 );
			}



		});
	};



	contentRotator();

	// const allComments  = $('p');
	// const lastComment = allComments.length - 1;
	// const firstComment = $('#container > p:first')
	// let counter = 1;
	// console.log(allComments)
	// console.log(lastComment)

	// function contentRotator() {
	// 	$( firstComment ).fadeIn( 2000 );	
		
	// 	for ( curComment of allComments ) {

			

	// 		if ( curComment = lastComment ) {
	// 			setTimeout( function() { 
	// 				$( curComment ).fadeOut( 1500 )
	// 				contentRotator, 2000 }
	// 				)
				
	// 		} else {
	// 			setTimeout ( function() {
	// 				$( curComment ).fadeOut( 1500 ), 2000
	// 			})
	// 		}
	// 	}


	// };
	// contentRotator();

}());
