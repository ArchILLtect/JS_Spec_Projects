

(function() {
    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();
        
        let miles = parseFloat(document.getElementById('distance').value);
        let answerBox = document.getElementById('answer');

        if (miles) {
            kM = Math.round((miles * 1.609344) * 10 ) / 10 ;
            answerBox.textContent = `${miles} miles = ${kM} kilometers`;
            answerBox.classList.remove('invisible');
        } else {
            answerBox.textContent = 'ERROR => You need to enter a number!';
        }
    });
})();