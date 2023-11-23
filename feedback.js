document.addEventListener("DOMContentLoaded", function () {
  // Get form elements by their IDs
  const form = document.querySelector("form");
  const nameInput = document.querySelector('input[placeholder="Enter your name"]');
  const emailInput = document.querySelector('input[placeholder="Enter your email"]');
  const messageInput = document.getElementById("message");

  // Function to validate the form
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission for testing

    // Get the values of form inputs
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Regular expression for valid email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check name field (only alphabets and spaces allowed)
    if (!name.match(/^[A-Za-z\s]+$/)) {
      alert("Name should only contain alphabets and spaces.");
      nameInput.focus();
      return false;
    }

    // Check email field (valid email format required)
    if (!email.match(emailPattern)) {
      alert("Invalid email format.");
      emailInput.focus();
      return false;
    }

    // Check if the email ends with "com"
    if (!email.toLowerCase().endsWith("com")) {
      alert("Email should end with 'com'.");
      emailInput.focus();
      return false;
    }

    // Check message field (not empty)
    if (message.trim() === "") {
      alert("Message should not be empty.");
      messageInput.focus();
      return false;
    }

    // If all validation passes, the form is valid
    alert("Form is valid. Submitting the form..."); // Remove this line when ready to submit the form
    form.submit(); // Uncomment this line to submit the form
  }

  // Add a submit event listener to the form
  form.addEventListener("submit", validateForm);
});
