import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import loadData from "./loaddata";

console.log('Hello Coders! :)');


const hamburgerButtonElement = document.querySelector("#mobile-menu");
const drawerElement = document.querySelector(".nav-list");
const mainElement = document.querySelector("main");
 
 
hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("mobile-nav");
    hamburgerButtonElement.classList.toggle("is-active");
    event.stopPropagation();
});

hamburgerButtonElement.addEventListener("keypress", event => {
    if (event.key === 'enter') {
        drawerElement.classList.toggle("mobile-nav");
        hamburgerButtonElement.classList.toggle("is-active");
        event.stopPropagation();
    }
});

mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("mobile-nav");
    hamburgerButtonElement.classList.remove("is-active");
    event.stopPropagation();
})

drawerElement.addEventListener("click", event => {
    drawerElement.classList.remove("mobile-nav");
    hamburgerButtonElement.classList.remove("is-active");
    event.stopPropagation();
})

loadData();