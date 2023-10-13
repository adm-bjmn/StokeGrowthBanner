<script>

// Get all the buttons with the id "supportBtn"
const buttons = document.querySelectorAll('[id="supportBtn"]');

// Get all elements with the class "email-us-button"
const emailButtons = document.querySelectorAll('.email-us-button');


// Add a click event listener to each support button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Find the parent div of the clicked button
        const parentDiv = button.closest('.e-con-inner');

        if (parentDiv) {
            // Get the support-content div inside the parent div
            const supportContentDiv = parentDiv.querySelector('.support-content');

            if (supportContentDiv) {
                // Toggle the "hidden" class on the support-content div
                supportContentDiv.classList.toggle('hidden');

                // Change the inner text of the button
                const buttonText = button.querySelector('.elementor-button-text');
                if (buttonText) {
                    if (supportContentDiv.classList.contains('hidden')) {
                        buttonText.textContent = 'Find out more';
                    } else {
                        buttonText.textContent = 'See Less';
                    }
                }
            }
        }
    });
});



// Loop through each Email button
emailButtons.forEach((button) => {
    // Get the button's id
    const buttonId = button.getAttribute('id');

    // Check if the button has an id
    if (buttonId) {
        // Create a mailto link
        const mailtoLink = `mailto:${buttonId}`;

        // Get the anchor element inside the button
        const anchorElement = button.querySelector('a');

        // Set the href attribute of the anchor element to the mailto link
        if (anchorElement) {
            anchorElement.setAttribute('href', mailtoLink);
        }
    }
});

</script>
