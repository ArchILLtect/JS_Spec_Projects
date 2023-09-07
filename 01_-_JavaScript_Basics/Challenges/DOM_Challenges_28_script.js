

(function() {

    let currentDiv = document.querySelector('div');

    currentDiv.addEventListener('mouseover', function() {
        currentDiv.classList.toggle('big');
    });

    currentDiv.addEventListener('mouseout', function() {
        currentDiv.classList.toggle('big');
    });

})();


