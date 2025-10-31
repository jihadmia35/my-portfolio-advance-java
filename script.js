const menuIcon = document.querySelector('.pages-mobile .menu');
const mobileNav = document.querySelector('.mobile-nav-menu');
const closeIcon = document.querySelector('.mobile-nav-menu .close-icon');
    

const navLinks = document.querySelectorAll('.mobile-nav-menu a');

function openMenu() {
    mobileNav.classList.add('open');
}


function closeMenu() {
    mobileNav.classList.remove('open');
}

menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);


navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
});