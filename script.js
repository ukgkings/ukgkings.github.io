document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const mobileNumber = document.getElementById('mobile-number').value;

    // Check if the mobile number is exactly 10 digits
    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert('Mobile number must be exactly 10 digits.');
        return;
    }

    // Redirect to 2page.html after validation
    window.location.href = '2page.html';
});
