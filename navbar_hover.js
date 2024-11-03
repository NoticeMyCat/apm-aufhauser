// JavaScript to add the active class to the current page link
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.navbar-links a');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
    // Setze die `active` Klasse, wenn die URLs übereinstimmen oder der Link die Startseite ist
    if (menuItem[i].href === currentLocation ||
        (menuItem[i].href.endsWith('/') && currentLocation.endsWith('/')) ||
        (menuItem[i].href.endsWith('/index.html') && currentLocation.endsWith('/'))) {
        menuItem[i].classList.add('active');
    }
}
