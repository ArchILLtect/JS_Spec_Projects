// Created on 9/08/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 1 - "Javascript Basics"

const detailsForm = document.getElementById('destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const destName = event.target.elements['name'].value;
    const destLocation = event.target.elements['location'].value;
    const destPhoto = event.target.elements['photo'].value;
    const destDesc = event.target.elements['description'].value;

    for ( let i = 0; i < detailsForm.length; i++ ) {
        detailsForm.elements[i].value = "";
    }

    let destCard = createDestinationCard( destName, destLocation, destPhoto, destDesc );
    
    const wishListContainer = document.getElementById('destinations_container');

    if ( wishListContainer.children.length === 0 ) {
        document.getElementById('title').textContent = "My Wish List";
    }

    document.getElementById('destinations_container').appendChild( destCard );
}

function createDestinationCard( name, location, photoUrl, description ) {

    const card = document.createElement( 'div' );
    card.className = 'card';

    const img = document.createElement( 'img' );
    img.setAttribute( 'alt', name );

    const constantPhotoUrl = './images/signpost.jpg';

    if( photoUrl.length === 0 ) {
        img.setAttribute( 'src', constantPhotoUrl );
    } else { img.setAttribute( 'src', photoUrl ); }

    card.appendChild(img);

    const cardBody = document.createElement( 'div' );
    cardBody.className = 'cardBody';

    const cardTItle = document.createElement( 'h3' );
    cardTItle.textContent = name ;
    cardBody.appendChild( cardTItle );

    const cardSubtitle = document.createElement( 'h4' );
    cardSubtitle.textContent = location ;
    cardBody.appendChild( cardSubtitle );

    if (description.length !== 0 ) {
        const cardText = document.createElement( 'p' );
        cardText.textContent = description ;
        cardText.className = 'cardText';
        cardBody.appendChild( cardText );
    }

    const cardDelBtn = document.createElement( 'button' );
    cardDelBtn.textContent = "Remove" ;
    cardBody.appendChild( cardDelBtn );

    cardDelBtn.addEventListener('click', removeDestination );

    card.appendChild( cardBody );

    return card;

}

function removeDestination(event) {
    let card = event.target.parentElement.parentElement;
    card.remove();
}


