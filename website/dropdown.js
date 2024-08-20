document.querySelectorAll('.dropdown_toggle').forEach(button => {
    button.addEventListener('click', function () {
        const dropdownContent = this.previousElementSibling;
        dropdownContent.classList.toggle('show');

        if (dropdownContent.classList.contains('show')) {
            this.textContent = 'Weniger erfahren';
        } else {
            this.textContent = 'Mehr erfahren';
        }
    });
});
