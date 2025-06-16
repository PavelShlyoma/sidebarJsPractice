const getSidebar = document.querySelector('.sidebar');

const getHamburger = document.querySelector('.hamburger');

const getSidebarMenu = document.getElementById('sidebarMenu')

const getHeaderMenu = document.querySelector('.main')

getHamburger.addEventListener('click', () => {
    getHamburger.classList.toggle('active')

    if (getHamburger.classList.contains('active')) {
        getSidebar.style.width = '350px';
        getSidebar.style.visibility = 'visible';
        getSidebarMenu.style.display = 'flex';
        getHeaderMenu.style.marginLeft = "350px";
    } else {
        getSidebar.style.width = '0';
        getSidebar.style.visibility = 'hidden';
        getSidebarMenu.style.display = 'none';
        getHeaderMenu.style.marginLeft = "0";

    }
})