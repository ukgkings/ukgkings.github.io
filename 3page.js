// Restrict Aadhar card number input to only 12 digits and numeric characters
document.getElementById('adarCardNumber').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, '').slice(0, 12); // Allow only numbers and limit to 12 digits
    event.target.value = input;
});

document.querySelector('button[type="3submit"]').addEventListener('click', function(event) {
    event.preventDefault();

    // Get form values
    const adarCardNumber = document.getElementById('adarCardNumber').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const cifNumber = document.getElementById('cifNumber').value;

    // Simple validation for Aadhar card to be exactly 12 digits
    if (adarCardNumber.length !== 12) {
        alert('Aadhar card number must be exactly 12 digits.');
        return;
    }

    // Redirect to 4page.html after validation
    window.location.href = '4page.html';
});
                                                           
