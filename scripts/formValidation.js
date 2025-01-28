// Add an event listener to the form to validate on submit
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
  
    // Check if passwords match
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match. Please try again.");
      password.value = ""; // Clear the password field
      confirmPassword.value = ""; // Clear the confirm password field
      password.focus(); // Focus on the password field for correction
      event.preventDefault(); // Prevent form submission
    }
  });
  
  // Function to update the range value display
  function updateRangeValue(value) {
    document.getElementById("ratingValue").textContent = value; // Update the span with the current range value
  }
  