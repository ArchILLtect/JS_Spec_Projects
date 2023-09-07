

(function() {

    let mainHeader = document.querySelector('h1');
    let userForm = document.querySelector('form');
    let userInput = document.querySelector('input');

    userForm.addEventListener('submit', function(evt) {
        event.preventDefault()
        console.log(userInput)
        let headerSize = parseInt(userInput.value);

        if (headerSize > 0) {
            mainHeader.style.fontSize = `${headerSize}px`;
            
        } else { alert ('You must enter a number greater then zero!')
            
        }
    })

})();


