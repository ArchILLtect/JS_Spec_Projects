

(function() {

    const btn = document.querySelector('button');
    const paras = document.querySelectorAll('p');

    btn.addEventListener('click', function() {
        for ( currentPara of paras ) {
        currentPara.style.color = "green";
        }
    })

})();

