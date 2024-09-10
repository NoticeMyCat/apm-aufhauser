document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarClose = document.getElementById("navbar-close");
    const navbarLinks = document.getElementById("navbar-links");
    const body = document.body; // Zugriff auf das body-Element

    navbarToggle.addEventListener("click", function () {
        navbarLinks.classList.add("active");
        navbarToggle.classList.add("hidden");
        navbarClose.classList.add("active");
        body.style.overflow = "hidden"; // Scrollen verhindern
    });

    navbarClose.addEventListener("click", function () {
        navbarLinks.classList.remove("active");
        navbarToggle.classList.remove("hidden");
        navbarClose.classList.remove("active");
        body.style.overflow = ""; // Scrollen wieder zulassen
    });
});


// Funktion zum Setzen der aktiven Klasse basierend auf der aktuellen URL
function setActiveNavLink() {
    // Wähle alle Links in der Navbar aus
    const navLinks = document.querySelectorAll('.navbar-links a');

    // Hole die aktuelle URL
    const currentURL = window.location.href;

    // Iteriere über die Links und vergleiche den `href` mit der aktuellen URL
    navLinks.forEach(link => {
        if (currentURL.includes(link.href)) {
            // Entferne die `active` Klasse von allen anderen Links
            navLinks.forEach(link => link.classList.remove('active'));

            // Füge die `active` Klasse dem passenden Link hinzu
            link.classList.add('active');
        }
    });
}

// Setze die aktive Klasse beim Laden der Seite
setActiveNavLink();

// Optional: Setze die aktive Klasse auch bei Fenstergrößenänderung oder bei öffnendem Hamburger-Menü
window.addEventListener('resize', setActiveNavLink);



