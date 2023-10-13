<script>
    // get all filter buttons
const filterBtn = document.querySelectorAll('.filterBtn');

// get all items to filter
const loopItems = document.querySelectorAll(".e-loop-item");

// create active filters list
const selectedFilters = [];

console.log(filterBtn);
console.log(loopItems);

// Function to check if any child element has the specified ID
function hasChildWithId(element, id) {
    const childElements = element.querySelectorAll(`#${id}`);
    return childElements.length > 0;
}

// Function to show/hide items
function toggleItemDisplay(item, show) {
    if (show) {
        item.style.removeProperty('display'); // Remove the display property
    } else {
        item.style.display = 'none'; // Set display to 'none'
    }
}

// Function to filter and display items
function filterItems() {
    loopItems.forEach((item) => {
        if (selectedFilters.length === 0 || selectedFilters.some(filterId => hasChildWithId(item, filterId))) {
            toggleItemDisplay(item, true); // Show the item
        } else {
            toggleItemDisplay(item, false); // Hide the item
        }
    });
}

// Add event listener to each button
filterBtn.forEach((filter, index) => {
    filter.addEventListener("click", () => {
        // Toggle the 'selected-filter' class on the button
        filter.classList.toggle('selected-filter');
        const filterId = filter.getAttribute('id');
        if (filterId) {
            // Check if the filter ID is in the selectedFilters array
            const index = selectedFilters.indexOf(filterId);

            if (index === -1) {
                // If not in the array, add it
                selectedFilters.push(filterId);
            } else {
                // If already in the array, remove it
                selectedFilters.splice(index, 1);
            }
        }

        // Call the filterItems function to filter and display items
        filterItems();
    });
});

// Initially, show all items
filterItems();

// Function to get URL parameter by name
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Read the 'category' parameter from the URL
var category = getUrlParameter('category');

// Preselect the filter if 'category' parameter is present
if (category) {
    // Loop through filter buttons and find the one with matching category ID
    filterBtn.forEach((filter) => {
        const filterId = filter.getAttribute('id');
        if (filterId === category) {
            filter.classList.add('selected-filter'); // Add selected class to preselected filter
            selectedFilters.push(filterId); // Add filter to selectedFilters array
        }
    });

    // Call the filterItems function to filter and display items based on preselected filter
    filterItems();
}

</script>
