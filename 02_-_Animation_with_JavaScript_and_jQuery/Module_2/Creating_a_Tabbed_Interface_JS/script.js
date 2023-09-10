// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

const tabs = document.querySelectorAll('#tabs > ul > li > a');

for ( i=0; i<tabs.length; i++ ) {
    tabs[i].addEventListener('click', selectTab)
}

function selectTab(event) {
    event.preventDefault();

    for ( i=0; i<tabs.length; i++ ) {
        tabs[i].removeAttribute('class');
    }

    event.target.className = 'active';

    let thisTab = event.target.getAttribute("href");
    let thisContent = document.querySelector(thisTab);

    let oldContent = document.querySelector('.visible');
    oldContent.className = 'visuallyhidden';
    oldContent.addEventListener('transitionend', function() {
        oldContent.className = 'hidden';
        thisContent.className = 'visible visuallyhidden';
        setTimeout(function() {
            thisContent.classList.remove('visuallyhidden');
        }, 20);
    }, {capture:false, once:true, passive:false} );
}