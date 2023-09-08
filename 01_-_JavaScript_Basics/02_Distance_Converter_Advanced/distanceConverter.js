

(function() {
    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerBox = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(e) {
        if ( e.key == 'm' || e.key == 'M' ) {
            convertType = "miles";
            heading.textContent = "Miles to Kilometers Converter";
            intro.textContent = "Type in a number of miles and click the button to convert the distance to kilometers."
            answerBox.classList.add('invisible');
        } else if ( e.key == 'k' || e.key == 'K' ) {
            convertType = "kM";
            heading.textContent = "Kilometers to Miles Converter";
            intro.textContent = "Type in a number of kilometers and click the button to convert the distance to miles."
            answerBox.classList.add('invisible');        }

    })

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {
            if ( convertType == "miles" ) {
                const kMCalc = Math.round((distance * 1.609344) * 10 ) / 10 ;
                answerBox.textContent = `${distance} miles = ${kMCalc} kilometers`;
                answerBox.classList.remove('invisible');    
            } else if ( convertType == "kM") {
                const milesCalc = Math.round((distance / 1.609344) * 10 ) / 10 ;
                answerBox.textContent = `${distance} kilometers = ${milesCalc} miles`;
                answerBox.classList.remove('invisible');
            }
        } else {
            answerBox.textContent = 'ERROR => You need to enter a number!';
        }
    });
})();