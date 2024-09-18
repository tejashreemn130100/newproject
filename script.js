document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password are correct
    if (username === "TEJASHREE" && password === "SIDDU") {
        window.location.href = 'birthday.html'; // Redirect to the birthday wishes page
    } else {
        document.getElementById("error-message").textContent = "Invalid login details! Please try again.";
    }
});
