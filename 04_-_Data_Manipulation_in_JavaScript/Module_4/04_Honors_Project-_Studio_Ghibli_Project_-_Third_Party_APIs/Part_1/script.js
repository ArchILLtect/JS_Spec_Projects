/* Created on 10/11/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery" */

const mainElement = document.querySelector('main');
async function getFilms() {
 const filmsPromise = await fetch('https://ghibliapi.herokuapp.com/films');
 const films = await filmsPromise.json();
 console.log(films);
}
getFilms();

function createCard(data) {
    const card = document.createElement('article');
    const movieTitle = document.createElement('h2');
    const movieTitleTxt = document.createTextNode(data.title);
    movieTitle.appendChild(movieTitleTxt);
    const director = document.createElement('p');
    const directorTxt = document.createTextNode(`Director: ${data.director}`);
    director.appendChild(directorTxt);
    //write similar code for year, description and score
    card.appendChild(movieTitle);
    card.appendChild(director);
    // append the year, description and score
    mainElement.appendChild(card);
   }