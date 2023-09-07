

(function() {

const container = document.getElementById('content');
const myImages = [ 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg' ];
const slideScreen = document.getElementById('myImage');
const imageCaptionText = document.getElementById('imageCaption');
const buttonNext = document.getElementById('next');
const buttonPrevious = document.getElementById('previous');
const linkContainer = document.getElementById('links');
let currentImage = 0;

linkContainer.classList.add('buttonReady');

buttonNext.addEventListener('click', goForward)
buttonPrevious.addEventListener('click', goBack)

function goForward() {
    if ( currentImage < myImages.length -1 ) {
        currentImage++;
        swapImage()
    } else { alert('This is the last slide!') }
}; 

function goBack() {
    if ( currentImage > 0 ) {
        currentImage--;
        swapImage()
    } else  { alert('This is the first slide!') }
}

function swapImage() {
    linkContainer.classList.remove('buttonReady');
    slideScreen.classList.add('fadeinimg');
    slideScreen.setAttribute('src', './slides/' + myImages[currentImage]);
    imageCaptionText.textContent = `Image ${currentImage + 1}`
    slideScreen.addEventListener('animationend', function() {
        slideScreen.classList.remove('fadeinimg');
        linkContainer.classList.add('buttonReady');
    })
}

})();