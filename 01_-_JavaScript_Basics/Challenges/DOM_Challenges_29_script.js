

(function() {

    let main = document.querySelector('main');
    let currentPosition;

    window.addEventListener('scroll', function(evt) {
        currentPosition = window.pageYOffset;
        console.log(currentPosition)

        /*
        if ( currentPosition > 2000 ) {
            main.className = 'five';
        } else if ( currentPosition > 1500 ) {
            main.className = 'four';
        } else if ( currentPosition > 1000 ) {
            main.className = 'three';
        } else if ( currentPosition > 500 ) {
            main.className = 'two';
        } else if ( currentPosition < 500 ) {
            main.className = 'one';
        }
        */

        switch(true) {
            case currentPosition < 500:
                main.className = 'one'; break;
            case currentPosition < 1000:
                main.className = 'two'; break;
            case currentPosition < 1500:
                main.className = 'three'; break;
            case currentPosition < 2000:
                main.className = 'four'; break;
            default: main.className = "five";
        }
    });

})();

    
