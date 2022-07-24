/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNavList() {
    for (sec of sections) {
        navBarListItem = document.createElement("li");
        navBarListItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`
    navBarList.appendChild(navBarListItem);
    };
};
buildNavList();

// adding & removing sections to and from active state and highlight them
window.addEventListener('scroll',()=>{
    sections.forEach((activeSec) =>{
        const secTop =activeSec.getBoundingClientRect().top;
        const activeLink=document.querySelector(`a[href="#${activeSec.id}"]`);
        if(secTop>0 && secTop <400){
            activeSec.classList.add('your-active-class');
            activeLink.classList.add('active-link');
        }
        else{
            activeSec.classList.remove('your-active-class');
            activeLink.classList.remove('active-link')
        }
    });
});

//scroll smoothly
navBarList.addEventListener("click", (toSec)=>{
    toSec.preventDefault();
    if(toSec.target.dataset.nav){
        document.getElementById(`${toSec.target.dataset.nav}`).scrollIntoView({
            behavior:"smooth"
        });
    }
})

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


