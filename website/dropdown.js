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

document.querySelectorAll('.dropdown_toggle_1').forEach(button => {
    button.addEventListener('click', function () {
        const dropdownContent = this.previousElementSibling;
        const imageStern = document.querySelector('#img_energy_2');

        dropdownContent.classList.toggle('show');

        if (dropdownContent.classList.contains('show')) {
            this.textContent = 'Weniger erfahren';
        } else {
            this.textContent = 'Mehr erfahren';
        }

        // Zeigt das Bild, wenn das Dropdown geöffnet ist
        if (dropdownContent.classList.contains('show')) {
            imageStern.style.display = 'block';
        } else {
            imageStern.style.display = 'none';
        }
    });
});
