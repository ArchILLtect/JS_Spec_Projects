

(function() {

    let btnAdd = document.querySelectorAll('button')[0];
    let btnRemove = document.querySelectorAll('button')[1];
    let currentDiv = document.querySelector('div');
    let paraCounter = 1;

    btnAdd.addEventListener('click', function() {
        paraCounter++;
        let newPara = document.createElement('p');
        currentDiv.appendChild(newPara);
        newPara.textContent = `This is paragraph number ${paraCounter}`;
    })

    btnRemove.addEventListener('click', function() {
        if ( paraCounter > 1 ) {
            paraCounter--;
            currentDiv.removeChild(currentDiv.lastChild);
        } else { alert('Cannot remove the first paragraph!') };
    })

})();


