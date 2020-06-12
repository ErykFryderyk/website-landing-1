
const $browserScreenPosition = window.innerHeight;


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

// pobieranie elementów 
const prepareDOMElements = () => {
    
    $hamburgerBtn = document.querySelector('.hamburger');
    $mobileNav = document.querySelector('.mobile-nav-menu');
    $mobileOverly = document.querySelector('.mobile-body-overly');
    $body = document.getElementById('body');
    $header = document.querySelector('.header');
    $heroSection = document.querySelector('.hero-section')
    $backToTop = document.querySelector('.back-to-top');
    $element = document.querySelector('.about-image')
    $firstCounter = document.getElementById('counter-first');
    $appearAnimation = document.querySelectorAll('.appear-animation');
}


// nadane Nasłuchiwanie
const prepareDOMEvents = () => {
    $hamburgerBtn.addEventListener('click', mobileMenu);
    $mobileOverly.addEventListener('click', mobileMenu);
    window.addEventListener('scroll', scrollAppear);
    window.addEventListener('scroll', fadeInRight);
} 


const mobileMenu = () =>{
    if($mobileNav.classList.contains('mobile-nav-menu--active')){
        $mobileNav.classList.remove('mobile-nav-menu--active');
        $mobileOverly.style.display='none';
        $body.classList.remove('mobile-nav-active');
    }else{
        $mobileNav.classList.add('mobile-nav-menu--active');
        $mobileOverly.style.display = 'block';
        $body.classList.add('mobile-nav-active');
    }
}

const scrollAppear = () => {
    const scrollHeight = $body.getBoundingClientRect().top;
    if (scrollHeight < '-80'){
        $header.classList.add('header--scroll');
        $backToTop.style.display = 'block';
    }else{
        $header.classList.remove('header--scroll');
        $backToTop.style.display = 'none';
    }

    $appearAnimation.forEach(element => {
        if(element.getBoundingClientRect().top < $browserScreenPosition){
            element.classList.add('intro-appear');
        }
    });
}


const fadeInRight = () => {
    
    if($element.getBoundingClientRect().top < $browserScreenPosition){
        $element.classList.add('fade-in-right');
    }
}


document.addEventListener('DOMContentLoaded', main);