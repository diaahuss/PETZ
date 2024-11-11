// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get the buttons for selecting profile type
    const ownerButton = document.getElementById("ownerButton");
    const sitterButton = document.getElementById("sitterButton");

    // Get the profile form sections
    const profileSection = document.getElementById("profileSection");
    const profileTitle = document.getElementById("profileTitle");

    // Get the specific profile forms for Pet Owner and Pet Sitter
    const ownerProfile = document.getElementById("ownerProfile");
    const sitterProfile = document.getElementById("sitterProfile");

    // Event listener for when the user selects "Pet Owner"
    ownerButton.addEventListener("click", function() {
        // Show profile section and set title
        profileSection.style.display = "block";
        profileTitle.textContent = "Create Your Pet Owner Profile";
        
        // Show Pet Owner profile form and hide Pet Sitter form
        ownerProfile.style.display = "block";
        sitterProfile.style.display = "none";
    });

    // Event listener for when the user selects "Pet Sitter"
    sitterButton.addEventListener("click", function() {
        // Show profile section and set title
        profileSection.style.display = "block";
        profileTitle.textContent = "Create Your Pet Sitter Profile";
        
        // Show Pet Sitter profile form and hide Pet Owner form
        sitterProfile.style.display = "block";
        ownerProfile.style.display = "none";
    });

    // Get all the input fields for validation
    const ownerFormInputs = ownerProfile.querySelectorAll("input, textarea");
    const sitterFormInputs = sitterProfile.querySelectorAll("input, textarea");

    // Function to validate form fields
    function validateForm(inputs) {
        let isValid = true;

        // Loop through each input and check if it's empty
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red"; // Add red border if empty
                isValid = false;
            } else {
                input.style.border = "1px solid #ddd"; // Reset border if filled
            }
        });

        return isValid;
    }

    // Add submit button functionality to the profile forms
    const ownerSubmitButton = document.createElement("button");
    ownerSubmitButton.textContent = "Submit Owner Profile";
    ownerProfile.appendChild(ownerSubmitButton);

    ownerSubmitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        if (validateForm(ownerFormInputs)) {
            alert("Pet Owner Profile submitted successfully!");
        } else {
            alert("Please fill out all fields.");
        }
    });

    const sitterSubmitButton = document.createElement("button");
    sitterSubmitButton.textContent = "Submit Sitter Profile";
    sitterProfile.appendChild(sitterSubmitButton);

    sitterSubmitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        if (validateForm(sitterFormInputs)) {
            alert("Pet Sitter Profile submitted successfully!");
        } else {
            alert("Please fill out all fields.");
        }
    });
});
