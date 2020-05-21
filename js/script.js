/*
    Change navbar on scroll
------------------------------*/
let navbar = document.querySelector('.navbar'),
    navLink = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        console.log(navbar);
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
            item.style.color = white;
        }) 
    }
})


/*
    Typing Effect in the Header
---------------------------------*/
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Web Developer', 'Front End Engineer', 'Musician'];
const typingDelay = 100;
const erasingDelay = 70;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(!(cursorSpan.classList.contains('typing'))) {
        cursorSpan.classList.add('typing');
    }
    // if last letter of a word is not typed
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(!(cursorSpan.classList.contains('typing'))) {
        cursorSpan.classList.add('typing');
    }
    // if string is not entirely erased
    if(charIndex > 0) { 
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

// Hiding Preloader and Calling the Typing function
window.addEventListener('load', () => {
    document.querySelector('.preloader-overlay').style.display = 'none';
    if(textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
})


/*
    Scroll slide up effect in the Projects Section
-----------------------------------------------------*/

let projects = document.querySelectorAll('.projects__tile');
projects.forEach(item => {
    item.classList.add('reveal-item');
})
document.addEventListener('scroll', () => {
    projects.forEach(item => {
        let divPosition = item.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        scrollPercentage = divPosition / screenPosition * 100;

        if (scrollPercentage < 85) {
            item.classList.add('reveal-item--is-visible');
        }
        else {
            item.classList.remove('reveal-item--is-visible');
        }
    })
})




