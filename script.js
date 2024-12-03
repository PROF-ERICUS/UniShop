// Validate Login Form
function validateLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
        alert('All fields are required!');
        return false;
    }
    return true;
}

// Validate Sign-Up Form
function validateSignUp() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert('All fields are required!');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return false;
    }

    return true;
}

// Validate Forgot Password Form
function validateForgotPassword() {
    const email = document.getElementById('forgotEmail').value.trim();

    if (!email) {
        alert('Email is required!');
        return false;
    }

    return true;
}
