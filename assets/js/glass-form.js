document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    // Reset error
    error.textContent = "";

    // Validation
    if(name === "" || email === "" || password === ""){
        error.textContent = "All fields are required!";
        return;
    }

    if(password.length < 6){
        error.textContent = "Password must be at least 6 characters!";
        return;
    }

    // Fake success action (replace with backend later)
    alert("Account created successfully!");

    // Clear form
    document.getElementById("registerForm").reset();
});