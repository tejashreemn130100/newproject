// Handle the login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if login ID and password are correct
    if (username === "TEJASHREE" && password === "NITHYA") {
        // Redirect to birthday wishes page
        window.location.href = 'birthday.html';
    } else {
        // Display error message
        document.getElementById("error-message").textContent = "Invalid login details!";
    }
});
