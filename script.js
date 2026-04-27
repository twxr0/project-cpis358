function validateLogin() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (email == "" || password == "") {
        document.getElementById("loginMessage").innerHTML = "Please fill in all login fields.";
        document.getElementById("loginMessage").style.color = "red";
        alert("Please fill in all login fields.");
        return false;
    } else {
        document.getElementById("loginMessage").innerHTML = "Login successful.";
        document.getElementById("loginMessage").style.color = "lightgreen";
        alert("Login successful.");
        return false;
    }
}

function validateSignUp() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (name == "" || email == "" || phone == "" || password == "" || confirmPassword == "") {
        document.getElementById("signupMessage").innerHTML = "Please fill in all signup fields.";
        document.getElementById("signupMessage").style.color = "red";
        alert("Please fill in all signup fields.");
        return false;
    } else if (password != confirmPassword) {
        document.getElementById("signupMessage").innerHTML = "Passwords do not match.";
        document.getElementById("signupMessage").style.color = "red";
        alert("Passwords do not match.");
        return false;
    } else {
        document.getElementById("signupMessage").innerHTML = "Signup successful.";
        document.getElementById("signupMessage").style.color = "lightgreen";
        alert("Signup successful.");
        return false;
    }
}

function validateBooking() {
    var name = document.getElementById("bookingName").value;
    var email = document.getElementById("bookingEmail").value;
    var match = document.getElementById("bookingMatch").value;
    var ticketType = document.getElementById("ticketType").value;
    var ticketNumber = document.getElementById("ticketNumber").value;
    var number = parseInt(ticketNumber);
    var price = 0;
    var total = 0;

    if (name == "" || email == "" || ticketNumber == "") {
        alert("Please complete the booking form.");
        return false;
    } else if (number <= 0) {
        alert("Number of tickets must be greater than zero.");
        return false;
    } else {
        if (ticketType == "VIP") {
            price = 300;
        } else if (ticketType == "Standard") {
            price = 150;
        } else {
            price = 80;
        }

        total = price * number;

        document.getElementById("ticketSummary").innerHTML = "Thank you, " + name + ". You selected " + number + " " + ticketType + " ticket(s) for " + match + ". Total price: " + total + " SAR.";
        document.getElementById("ticketSummary").style.color = "lightgreen";
        document.getElementById("ticketSummary").style.border = "1px solid lightblue";
        document.getElementById("ticketSummary").style.padding = "10px";

        return false;
    }
}

function changeTextAndImage() {
    document.getElementById("welcomeText").innerHTML = "GoalSeat makes football ticket booking easier by showing matches, prices, and ticket categories in a clear way.";
    document.getElementById("welcomeText").style.color = "lightblue";
    document.getElementById("welcomeText").style.fontWeight = "bold";
    document.getElementById("homeImage").style.border = "3px solid lightblue";
    document.getElementById("homeImage").style.width = "330px";
    document.getElementById("homeImage").style.height = "190px";
}

function addDynamicElements() {
    var features = "<h3>Dynamic Elements</h3><ul>";
    var text = "";

    for (var counter = 1; counter <= 3; counter++) {
        if (counter == 1) {
            text = "Fast booking";
        } else if (counter == 2) {
            text = "Clear ticket prices";
        } else {
            text = "Easy page navigation";
        }

        features = features + "<li>" + text + "</li>";
    }

    features = features + "</ul>";

    document.getElementById("dynamicArea").innerHTML = features;
    document.getElementById("dynamicArea").style.border = "2px solid lightblue";
}

function highlightTable() {
    document.getElementById("row1").style.backgroundColor = "#3a3a3a";
    document.getElementById("row1").style.color = "lightblue";

    document.getElementById("row2").style.backgroundColor = "#3a3a3a";
    document.getElementById("row2").style.color = "lightblue";
}

function showTeamMessage() {
    document.getElementById("teamMessage").innerHTML = "Our team built GoalSeat to make football ticket booking simple, fast, and organized.";
    document.getElementById("teamMessage").style.color = "lightgreen";
    document.getElementById("teamMessage").style.border = "1px solid lightblue";
    document.getElementById("teamMessage").style.padding = "10px";
}