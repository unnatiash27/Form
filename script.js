document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting

    let isValid = true;

    // Clear previous error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('ageError').innerText = '';
    document.getElementById('termsError').innerText = '';

    // Validate Username
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    // Validate Age
    const age = document.getElementById('age').value;
    if (age < 18 || age > 120) {
        document.getElementById('ageError').innerText = 'Please enter a valid age between 18 and 120.';
        isValid = false;
    }

    // Validate Terms and Conditions
    const termsAndConditions = document.getElementById('termsAndConditions').checked;
    if (!termsAndConditions) {
        document.getElementById('termsError').innerText = 'You must agree to the terms and conditions.';
        isValid = false;
    }

    // If valid, show success message and clear form
    if (isValid) {
        // Show a success pop-up (alert)
        alert('Registration Successful!');
        
        // Clear the form data
        document.getElementById('registrationForm').reset();

        // Optionally, you can also clear the error messages here
        document.getElementById('usernameError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('passwordError').innerText = '';
        document.getElementById('confirmPasswordError').innerText = '';
        document.getElementById('ageError').innerText = '';
        document.getElementById('termsError').innerText = '';
    }
});
