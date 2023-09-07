

(function() {

const myImages = [ 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg' ];
const slideScreen = document.getElementById('myImage');
const imageCaptionText = document.getElementById('imageCaption')
const buttonNext = document.getElementById('next');
const buttonPrevious = document.getElementById('previous');
let currentImage = 0;

buttonNext.addEventListener('click', goForward)
buttonPrevious.addEventListener('click', goBack)

function goForward() {
    if ( currentImage < myImages.length -1 ) {
    currentImage++;
    slideScreen.setAttribute('src', myImages[currentImage]);
    imageCaptionText.textContent = `Image ${currentImage + 1}`
    } else { alert('This is the last slide!') }
}

function goBack() {
    if ( currentImage > 0 ) {
    currentImage--;
    slideScreen.setAttribute('src', myImages[currentImage]);
    imageCaptionText.textContent = `Image ${currentImage + 1}`
    } else  { alert('This is the first slide!') }
}

})();