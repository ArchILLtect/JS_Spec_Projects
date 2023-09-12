// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

(function(){
	"use strict";
	

	const allComments  = document.querySelectorAll('p');
	const firstComment = document.querySelector('#container > p')
	const lastComment = allComments.length - 1;
	let counter = 1;

	function contentRotator() {
		$(firstComment).fadeIn( 2000 );
		


	};
	contentRotator();

}());
