document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("button[type='submit']");
    const salutationSelect = document.getElementById("salutation");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const messageTextarea = document.getElementById("message");

    // Funktion zur Validierung des Formulars
    function validateForm() {
        const salutation = salutationSelect.value.trim();
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const message = messageTextarea.value.trim();

        // Überprüfen, ob alle erforderlichen Felder ausgefüllt sind
        return salutation !== "" && firstName !== "" && lastName !== "" && message !== "";
    }

    // Funktion, um den ersten Buchstaben großzuschreiben
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Event Listener für das Absenden des Formulars
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Formulars

        if (validateForm()) {
            // Formulardaten abrufen
            const salutation = capitalizeFirstLetter(salutationSelect.value);
            const firstName = firstNameInput.value;
            const lastName = lastNameInput.value;
            const message = messageTextarea.value;

            // E-Mail-Adresse, Betreff und Nachricht zusammenstellen
            const mailto = 'mailto:apm.aufhauser@gmail.com';
            const subject = `APM: ${salutation} ${firstName} ${lastName}`;
            const body = `${message}\n\nAnrede: ${salutation}\nVorname: ${firstName}\nNachname: ${lastName}`;

            // E-Mail-Link erstellen
            const emailLink = `${mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // E-Mail-Link öffnen
            window.location.href = emailLink;
        } else {
            // Fehlermeldung anzeigen
            alert("Bitte füllen Sie alle erforderlichen Felder aus.");
        }
    });
});
