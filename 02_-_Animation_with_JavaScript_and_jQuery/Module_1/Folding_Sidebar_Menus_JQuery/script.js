// Created on 9/09/23 by ArchILLtect for the Coursera program "Javascript for Beginners Specialization" - Course 2 - "Animation with JavaScript and JQuery"

(function() {
    $('ul li ul').css('display', "none");
    let subMenuVisiblity = "hidden"
    
    $('.menulink').on("click", function() {
        const currentSubmenu = $(this).next('ul');
    
        $('ul li ul').not(currentSubmenu).hide();
    
        currentSubmenu.toggle();
    })
}())
