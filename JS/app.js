
//console.log('java script connected properly');

//Global variables are defined
const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar__menu');
const ul = document.querySelector('#navbar__list');


// build the nav

const buildNav = () => {
    sections.forEach(section => {
        //create li elements
        const newElement = document.createElement('li');
        //link the elements with their respective sections
        newElement.innerHTML = `<a  href=#${section.id} class='menu__link'>${section.dataset.nav}</a>`;
        //append elements to the ul list
        ul.appendChild(newElement);
    })

}
buildNav();

//implement active class
window.onscroll = function (){
    //remove the default active class
    sections.forEach(section => {
     section.classList.remove("your-active-class");
     //change the color of the active class to defautl color
      section.style.backgroundColor ='';
    })
    //add active class to the section near the top viewport
    sections.forEach(section => {
        
        if(window.scrollY >= section.offsetTop-150 && window.scrollY <= section.offsetTop + section.offsetHeight) {

            section.classList.add("your-active-class");
            //change the active class to grey
            section.style.backgroundColor ='grey';

            for (let i=0; i< ul.children.length; i++) {
                let link  = ul.children[i].firstChild.href.split("#")[1];
               if(link==section.id) {
                   
                   ul.children[i].classList.add("active");
               }
           }

            sections.forEach(section2 => {
                if(section !=section2) {
                    section2.classList.remove("your-active-class");
                    section2.style.backgroundColor ='';
                    for (let i=0; i< ul.children.length; i++) {
                        let link  = ul.children[i].firstChild.href.split("#")[1];
                       if(link==section2.id) {
                          
                           ul.children[i].classList.remove("active");
                       }
                   }
                   
                }
            });
        } 
       
    
    });
}
