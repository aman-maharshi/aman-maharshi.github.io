// setTimeout(function() {
//     document.querySelector('.preloader-overlay').style.display = 'none';
// }, 1250)


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.preloader-overlay').style.display = 'none';
})
// window.addEventListener('load', () => {
//     document.querySelector('.preloader-overlay').style.display = 'none';
// });


/*
    Change navbar on scroll
------------------------------*/
let navbar = document.querySelector('.navbar'),
    navLink = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = "#161819";
        navbar.style.transition = "all .6s";
        navLink.forEach((item) => {
            item.style.color = "white";
            item.style.transition = "all .6s";
        }) 
    }
    else {
        navbar.style.background = "none";
        navLink.forEach((item) => {
            item.style.color = "#161819";
        }) 
    }
})