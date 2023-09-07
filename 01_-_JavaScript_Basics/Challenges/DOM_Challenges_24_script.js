

(function() {

    let btn = document.querySelector('button');
    let currentDiv = document.querySelector('div');

    btn.addEventListener('click', function() {
        let newPara = document.createElement('p');
        currentDiv.appendChild(newPara);
        newPara.textContent = 'A new paragraph.'
    })

})();

