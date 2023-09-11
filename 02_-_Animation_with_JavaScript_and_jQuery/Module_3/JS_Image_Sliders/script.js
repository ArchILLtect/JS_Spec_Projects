// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

window.addEventListener('load', function() {

    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    const totalWidth = slideCount * slideWidth + 'px';
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#prev');

    console.log(slideWidth)

    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    next.addEventListener('click', function(event) {
        event.preventDefault();
        counter++;
        if (counter == slideCount) { counter = 0; }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    })

    previous.addEventListener('click', function(event) {
        event.preventDefault();
        counter--;
        if (counter < 0 ) { counter = slideCount - 1; }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    })




})