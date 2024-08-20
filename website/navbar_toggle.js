document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarClose = document.getElementById("navbar-close");
    const navbarLinks = document.getElementById("navbar-links");

    navbarToggle.addEventListener("click", function () {
        navbarLinks.classList.add("active");
        navbarToggle.classList.add("hidden");
        navbarClose.classList.add("active");
    });

    navbarClose.addEventListener("click", function () {
        navbarLinks.classList.remove("active");
        navbarToggle.classList.remove("hidden");
        navbarClose.classList.remove("active");
    });
});
