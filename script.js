function showMessage(elementId, message, success) {
    var element = document.getElementById(elementId);

    if (element !== null) {
        element.innerHTML = message;

        if (success === true) {
            element.className = "success-message";
        } else {
            element.className = "error-message";
        }
    }
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isSaudiPhone(phone) {
    var phonePattern = /^05[0-9]{8}$/;
    return phonePattern.test(phone);
}

function validateLogin() {
    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        showMessage("loginMessage", "Please fill in all login fields.", false);
        alert("Please fill in all login fields.");
        return false;
    }

    if (isValidEmail(email) === false) {
        showMessage("loginMessage", "Please enter a valid email address.", false);
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.length < 4) {
        showMessage("loginMessage", "Password must be at least 4 characters.", false);
        alert("Password must be at least 4 characters.");
        return false;
    }

    showMessage("loginMessage", "Login successful. Welcome back to GoalSeat!", true);
    alert("Login successful. Welcome back to GoalSeat!");
    return false;
}

function validateSignUp() {
    var name = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        showMessage("signupMessage", "Please complete all required fields.", false);
        alert("Please complete all required fields.");
        return false;
    }

    if (name.length < 3) {
        showMessage("signupMessage", "Full name must be at least 3 characters.", false);
        alert("Full name must be at least 3 characters.");
        return false;
    }

    if (isValidEmail(email) === false) {
        showMessage("signupMessage", "Please enter a valid email address like example@gmail.com.", false);
        alert("Please enter a valid email address like example@gmail.com.");
        return false;
    }

    if (isSaudiPhone(phone) === false) {
        showMessage("signupMessage", "Phone number must be a Saudi number, numbers only, and start with 05. Example: 0551234567", false);
        alert("Phone number must be a Saudi number, numbers only, and start with 05. Example: 0551234567");
        return false;
    }

    if (password.length < 6) {
        showMessage("signupMessage", "Password must be at least 6 characters.", false);
        alert("Password must be at least 6 characters.");
        return false;
    }

    if (password !== confirmPassword) {
        showMessage("signupMessage", "Passwords do not match.", false);
        alert("Passwords do not match.");
        return false;
    }

    showMessage("signupMessage", "Account created successfully. Welcome to GoalSeat!", true);
    alert("Account created successfully. Welcome to GoalSeat!");
    return false;
}

function validateBooking() {
    var name = document.getElementById("bookingName").value.trim();
    var email = document.getElementById("bookingEmail").value.trim();
    var match = document.getElementById("bookingMatch").value;
    var ticketType = document.getElementById("ticketType").value;
    var ticketNumber = document.getElementById("ticketNumber").value;
    var price = 0;

    if (name === "" || email === "" || ticketNumber === "") {
        alert("Please complete the booking form.");
        return false;
    }

    if (name.length < 3) {
        alert("Full name must be at least 3 characters.");
        return false;
    }

    if (isValidEmail(email) === false) {
        alert("Please enter a valid email address like example@gmail.com.");
        return false;
    }

    if (ticketNumber <= 0) {
        alert("Number of tickets must be greater than zero.");
        return false;
    }

    if (ticketType === "VIP") {
        price = 300;
    } else if (ticketType === "Standard") {
        price = 150;
    } else {
        price = 80;
    }

    var total = price * ticketNumber;
    var summary = document.getElementById("ticketSummary");

    summary.innerHTML = "Thank you, " + name + ". Your request for " + ticketNumber + " " + ticketType + " ticket(s) for " + match + " has been received. Total price: " + total + " SAR.";
    summary.style.border = "2px solid lightblue";
    summary.style.backgroundColor = "#303030";
    summary.style.color = "lightgreen";
    summary.style.padding = "15px";

    return false;
}

function showAboutImage() {
    var text = document.getElementById("welcomeText");
    var image = document.getElementById("homeImage");

    text.innerHTML = "Learn more about GoalSeat, our project idea, and how the website helps football fans book tickets easily.";
    text.style.color = "lightblue";
    text.style.fontWeight = "bold";
    text.style.fontSize = "18px";

    image.src = "AboutUs.png";
    image.style.border = "3px solid lightblue";
    image.style.boxShadow = "0px 0px 12px lightblue";
    image.style.transform = "scale(1.03)";
}

function addDynamicFeatures() {
    var features = ["Easy ticket request process", "Clear match and stadium information", "Different ticket categories for fans"];
    var area = document.getElementById("dynamicArea");

    area.style.display = "block";
    area.innerHTML = "<h3>Website Features</h3>";

    var list = document.createElement("ul");

    for (var i = 0; i < features.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = features[i];
        list.appendChild(item);
    }

    area.appendChild(list);
    area.style.border = "2px solid lightblue";
    area.style.backgroundColor = "#303030";
}

function highlightTable() {
    var table = document.getElementById("matchesTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        rows[i].className = "highlight-row";
        rows[i].style.color = "lightblue";
    }
}

function showTeamMessage() {
    var message = document.getElementById("teamMessage");

    message.innerHTML = "GoalSeat was created to give football fans a simple and organized way to request match tickets.";
    message.style.backgroundColor = "#1f1f1f";
    message.style.padding = "10px";
    message.style.border = "1px solid lightblue";
}