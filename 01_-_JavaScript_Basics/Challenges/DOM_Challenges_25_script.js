

(function() {

	let btnAdd = document.querySelectorAll('button')[0];
	let btnRemove = document.querySelectorAll('button')[1];
	let currentDiv = document.querySelector('div');

	btnAdd.addEventListener('click', function() {
		let newPara = document.createElement('p');
		currentDiv.appendChild(newPara);
		newPara.textContent = 'A new paragraph.';
	})

	btnRemove.addEventListener('click', function() {
		currentDiv.removeChild(currentDiv.lastChild);
	})

})();


