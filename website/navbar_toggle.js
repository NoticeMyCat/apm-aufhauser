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
