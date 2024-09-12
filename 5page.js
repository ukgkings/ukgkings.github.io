// Redirect to 5.html on form submission
document.querySelector('button[type="5submit"]').addEventListener('click', function(event) {
    event.preventDefault();

    const profilePassword = document.getElementById('profilePassword').value;

    // Additional validation can be added here if needed

    // Redirect after validation
    window.location.href = '7page.html';
});
