// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

(function() {

    const myImages = [ 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg' ];
    const slideScreen = document.getElementById('myImage');
    const imageCaptionText = document.getElementById('imageCaption');
    const playBtn = document.getElementById('play');
    const pauseBtn = document.getElementById('pause');
    const linkContainer = document.getElementById('links');
    let currentImage = 0;
    let showInterval;
    linkContainer.classList.add('buttonReady');

    playBtn.addEventListener('click', startShow );
    pauseBtn.addEventListener('click', pauseShow );
    slideScreen.addEventListener('mouseover', mousePause );
    slideScreen.addEventListener('mouseout', mouseStart );


    function startShow() {
        showInterval = setInterval( goForward, 1000 );
        slideScreen.addEventListener('mouseover', mousePause );
        slideScreen.addEventListener('mouseout', mouseStart );
    };
    startShow();

    function pauseShow() {
        clearInterval(showInterval);
        slideScreen.removeEventListener('mouseover', mousePause );
        slideScreen.removeEventListener('mouseout', mouseStart );
    };

    function mousePause () {
        clearInterval(showInterval);
    };

    function mouseStart () {
        showInterval = setInterval( goForward, 1000 );

    };

    function goForward() {
        if ( currentImage < myImages.length -1 ) {
            currentImage++;
            swapImage();
        } else {
            currentImage = 0
            swapImage();
        }
    };
    
    function swapImage() {
        linkContainer.classList.remove('buttonReady');
        slideScreen.classList.add('fadeinimg');
        slideScreen.setAttribute('src', 'slides/' + myImages[currentImage]);
        imageCaptionText.textContent = `Image ${currentImage + 1}`
        slideScreen.addEventListener('animationend', function() {
            slideScreen.classList.remove('fadeinimg');
            linkContainer.classList.add('buttonReady');
        })
    }
    
    })();