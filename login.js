// Function to validate login
function validateLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for demo purposes
    const validEmail = "emeyarwai@gmail.com";
    const validPassword = "123";

    // Validate credentials
    if (email === validEmail && password === validPassword) {
        // Simulate successful login (redirect to home page or dashboard)
        alert("Login successful! Redirecting to the dashboard.");
        window.location.href = "home.html"; // Replace with your dashboard page
    } else {
        // Show error message if credentials are incorrect
        alert("Invalid email or password. Please try again.");
    }
}
