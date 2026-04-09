function validateLogin() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please fill in all login fields.");
        return false;
    }

    alert("Login successful!");
    return false;
}

function validateSignUp() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all signup fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Signup successful!");
    return false;
}