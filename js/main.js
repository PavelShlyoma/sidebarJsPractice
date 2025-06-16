const getSidebar = document.querySelector('.sidebar');

const getHamburger = document.querySelector('.hamburger');

const getSidebarMenu = document.getElementById('sidebarMenu')

const getHeaderMenu = document.querySelector('.main')

getHamburger.addEventListener('click', () => {
    getHamburger.classList.toggle('active');
    getSidebar.classList.toggle('sidebar-open');
    getHeaderMenu.classList.toggle('main-sidebar-open')
})