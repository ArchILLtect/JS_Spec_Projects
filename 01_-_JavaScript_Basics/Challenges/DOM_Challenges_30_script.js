

(function() {

    let main = document.querySelector('main');
    let currentPosition;

    window.addEventListener('keydown', function(e) {
        console.log(e.key)

        if ( e.key == 'b' || e.key == 'B' ) {
            main.className = 'one';
        } else if (  e.key == 'v' || e.key == 'V' ) {
            main.className = 'two';
        } else if (  e.key == 'c' || e.key == 'C' ) {
            main.className = 'three';
        } else if (  e.key == 'f' || e.key == 'F' ) {
            main.className = 'four';
        } else if (  e.key == 'g' || e.key == 'G' ) {
            main.className = 'five';
        } else { main.className = 'default'}
    /*
        switch(true) {
            case e.key === "b":
                main.className = 'one'; break;
            case e.key === "v":
                main.className = 'two'; break;
            case e.key === "c":
                main.className = 'three'; break;
            case e.key === "f":
                main.className = 'four'; break;
            case e.key === "g":
                main.className = 'five'; break;
            default: main.className = "default";
        }
    */
    });

})();


