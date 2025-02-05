function register() {
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value.trim();

    if (username && password) {
        localStorage.setItem('registeredUser', username);
        localStorage.setItem('registeredPass', password);

        alert("Registration successful! 🎉 Please log in.");
        toggleForm();
    } else {
        alert("Please enter a valid username and password.");
    }
}

function login() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const storedUser = localStorage.getItem('registeredUser');
    const storedPass = localStorage.getItem('registeredPass');

    if (username === storedUser && password === storedPass) {
        alert("Login successful! 🎮");
        sessionStorage.setItem('loggedIn', 'true'); 
        sessionStorage.setItem('username', username); 
        window.location.href = "page1.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function logout() {
    sessionStorage.clear(); 
    alert("You have logged out.");
    window.location.href = "index.html"; 
}

function toggleForm() {
    let registerSection = document.getElementById("register-section");
    let loginSection = document.getElementById("login-section");

    if (registerSection.style.display === "none") {
        registerSection.style.display = "block";
        loginSection.style.display = "none";
    } else {
        registerSection.style.display = "none";
        loginSection.style.display = "block";
    }
}

window.onload = function() {
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
        document.getElementById('login-username').value = storedUser; 
    }

    if (sessionStorage.getItem('loggedIn') === 'true') {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("logout-section").style.display = "block";
    } else {
        document.getElementById("register-section").style.display = "block";
        document.getElementById("login-section").style.display = "none";
    }
};
