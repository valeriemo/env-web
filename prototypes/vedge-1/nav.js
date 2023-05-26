// CACHER LA BARRE DE NAVIGATION QUAND SCROLL DOWN ------------------------------------------------

const navbar = document.querySelector('nav');
let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    //si on scroll vers le haut
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } 
    //si on scroll vers le bas
    else {
        navbar.style.top = "-80px";
    }
    prevScrollPos = currentScrollPos;
}
