// Auto-format DOB input to DD/MM/YYYY
document.getElementById('dob').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, '').slice(0, 8);
    let formatted = '';

    if (input.length >= 5) {
        formatted = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4)}`;
    } else if (input.length >= 3) {
        formatted = `${input.slice(0, 2)}/${input.slice(2)}`;
    } else {
        formatted = input;
    }

    event.target.value = formatted;
});

// Event listener for the submit button
document.querySelector('button[type="2submit"]').addEventListener('click', function(event) {
    event.preventDefault();

    // Validate form fields
    const accountHolderName = document.getElementById('account-holder-name').value;
    const dob = document.getElementById('dob').value;

    // Regex pattern to validate date format DD/MM/YYYY
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!datePattern.test(dob)) {
        alert('Date of Birth must be in the format DD/MM/YYYY.');
        return;
    }

    // Redirect to 3page.html after validation
    window.location.href = '3page.html';
});
        
