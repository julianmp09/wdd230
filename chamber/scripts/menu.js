document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu button');
    const mainNav = document.querySelector('.main-nav ul');

    hamburgerMenuButton.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        hamburgerMenuButton.classList.toggle('active');
    });
});