// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

		
const submenus = document.querySelectorAll('ul li ul');

function openMenu() {
    const menuItems = document.querySelectorAll('.menulink');
    console.log(menuItems)

    for ( menuItem of menuItems ) {
        menuItem.addEventListener('click', function( event ) {
            event.preventDefault();
            let selectedMenu = event.target.parentNode.querySelector('ul');
            menuVisibliltyToggle( selectedMenu );
        })

    }
    return;
}
openMenu()


//Use thise function to only have ONE submenu open at a time:
function menuVisibliltyToggle( currentSubmenu ) {

    for ( submenu of submenus ) { submenu.classList.add('hide-menu'); }
    currentSubmenu.classList.remove('hide-menu');
    return;
}
for ( submenu of submenus ) { submenu.classList.add('hide-menu'); }
//End of single sub-menu opening functionality.


/*
// Use this function to leave the menus open while opening others:
function menuVisibliltyToggle( currentSubmenu ) {

    if ( currentSubmenu === undefined ) {
        for ( submenu of submenus ) { submenu.classList.toggle('hide-menu'); }
        return;
    } else {
        currentSubmenu.classList.toggle('hide-menu');
        return;
    }
}
menuVisibliltyToggle()
//End of sub-menu left open functionality.
*/

