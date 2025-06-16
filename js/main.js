const getSidebar = document.querySelector('.sidebar')

const getSidebarMenu = document.getElementById('sidebarMenu')

function setSidebarOpen (sidebarOpen) {
    sidebarOpen.style.width = '100%';
    sidebarOpen.style.visibility = 'visible';
}

function setSidebarClose (sidebarOpen) {
    sidebarOpen.style.width = '0';
    sidebarOpen.style.visibility = 'hidden';
}

function setSidebarMenuOpen (sidebarMenuOpen) {
    sidebarMenuOpen.style.display = 'flex';
}

function setSidebarMenuClose (sidebarMenuOpen) {
    sidebarMenuOpen.style.display = 'none';
}

document.addEventListener("click", (event) => {
    if (event.target.closest('.hamburger')) {
        setSidebarOpen(getSidebar);
        setSidebarMenuOpen(getSidebarMenu)
    }

    if (event.target.closest('.hamburger.active')) {
        setSidebarClose(getSidebar);
        setSidebarMenuClose(getSidebarMenu)
    }
})