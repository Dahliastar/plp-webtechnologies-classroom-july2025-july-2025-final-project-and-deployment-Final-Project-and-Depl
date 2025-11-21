// function to show error messages
function showError(input, message) {
    const formControl = input.parentElement;
    let error = formControl.querySelector(".error-msg");
  
    if (!error) {
      error = document.createElement("small");
      error.className = "error-msg";
      formControl.appendChild(error);
    }
  
    error.innerText = message;
    input.classList.add("error");
  }
  
  // Remove error messages
  function clearError(input) {
    const formControl = input.parentElement;
    const error = formControl.querySelector(".error-msg");
  
    if (error) error.remove();
    input.classList.remove("error");
  }
  
  // Email validation using regex
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Main form validator
  function validateForm() {
    let isValid = true;
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    // Validate name
    if (name.value.trim() === "") {
      showError(name, "Name is required.");
      isValid = false;
    } else {
      clearError(name);
    }
  
    // Validate email
    if (email.value.trim() === "") {
      showError(email, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(email);
    }
  
    // Validate message
    if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters.");
      isValid = false;
    } else {
      clearError(message);
    }
  
    // If valid
    if (isValid) {
      alert("Thank you! Your message has been successfully sent.");
      document.getElementById("contactForm").reset();
    }
  
    return false; // Prevent default submit for demo
  }
  