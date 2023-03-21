const menuLinks = document.querySelectorAll('.menu-box a');

function closeHamburgerMenu() {
    document.querySelector('#menu__toggle').checked = false;
}

for (let link of menuLinks) {
    link.addEventListener('click', closeHamburgerMenu);
};