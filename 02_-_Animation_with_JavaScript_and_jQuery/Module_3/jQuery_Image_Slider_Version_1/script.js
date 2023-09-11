// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

$(window).on('load', function() {
    'use strict';

    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageCount * imageWidth + 'px');


    let leftPosition = 0;
    let counter = 0;

    $('#slider ul').css("width", totalWidth);

    $('#next').on('click', function() {

        counter++;

        if ( counter == imageCount ) {
            counter = 0;
        }

        leftPosition = `-${counter * imageWidth}px`;
        $('#slider ul').animate( {left: leftPosition }, 700, 'easeInQuad' );
    })

    $('#previous').on('click', function() {

        if ( counter == 0 ) {
            counter = imageCount;
        }

        counter--;
                
        leftPosition = `-${counter * imageWidth}px`;
        $('#slider ul').animate( {left: leftPosition }, 700, 'easeInQuad' );
    })
});

