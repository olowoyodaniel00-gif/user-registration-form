document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission until validation is done

    // Get the values of the fields
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = document.getElementById('age').value;

    // Full Name validation
    if (!fullName || fullName.split(' ').length < 2) {
        alert('Full Name must contain at least 2 words');
        return;
    }

    // Email validation (basic pattern)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character');
        return;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Age validation
    if (parseInt(age) < 18) {
        alert('You must be at least 18 years old to register');
        return;
    }

    // If all validations pass, show success message
    alert('Registration Successful!');
});
