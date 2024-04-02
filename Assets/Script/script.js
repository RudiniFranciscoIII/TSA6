var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");

function signup(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function submitForm(event, formType) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve input values based on form type
    var userId, password, rememberPassword, email, agreeTerms;
    if (formType === 'login') {
        userId = document.getElementById('loginUserId').value;
        password = document.getElementById('loginPassword').value;
        rememberPassword = document.getElementById('rememberPassword').checked;
    } else if (formType === 'signup') {
        userId = document.getElementById('signupUserId').value;
        email = document.getElementById('signupEmail').value;
        password = document.getElementById('signupPassword').value;
        agreeTerms = document.getElementById('agreeTerms').checked;
    }

    // Store the data in local storage
    localStorage.setItem('formType', formType);
    localStorage.setItem('userId', userId);
    if (password) localStorage.setItem('password', password);
    if (rememberPassword) localStorage.setItem('rememberPassword', rememberPassword);
    if (email) localStorage.setItem('email', email);
    if (agreeTerms) localStorage.setItem('agreeTerms', agreeTerms);

    // Redirect to another page
    window.location.href = 'FormData.html'; // Change 'display.html' to the name of your second HTML page
}