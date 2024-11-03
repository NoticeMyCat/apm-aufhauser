// JavaScript to add the active class to the current page link
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.navbar-links a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].classList.add('active');
    }
}
