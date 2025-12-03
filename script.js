document.addEventListener('DOMContentLoaded', () => {
    // A simple console log to confirm the script is loaded.
    console.log("Tecknowfest'25 interactive script loaded.");

    // Select the main action buttons
    const registerButton = document.querySelector('.btn-register');
    const whatsappButton = document.querySelector('.btn-whatsapp');

    // Attach basic event listeners (for placeholder functionality)
    if (registerButton) {
        registerButton.addEventListener('click', (event) => {
            console.log("Navigating to Registration Form...");
        });
    }

    if (whatsappButton) {
        whatsappButton.addEventListener('click', (event) => {
            // In a real application, this would redirect to a WhatsApp group invite.
            // window.location.href = "https://wa.me/invite...";
            console.log("Attempting to join WhatsApp group.");
        });
    }
});