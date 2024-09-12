// Function to format DOB input with slashes
document.getElementById('dob').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, ''); // Remove non-digits
    let formatted = '';

    // Format input with slashes
    if (input.length > 4) {
        formatted = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4)}`;
    } else if (input.length > 2) {
        formatted = `${input.slice(0, 2)}/${input.slice(2)}`;
    } else {
        formatted = input;
    }

    // Update the input field value
    event.target.value = formatted;
});

// Event listener for form submission
document.querySelector('button[type="2submit"]').addEventListener('click', function(event) {
    event.preventDefault();

    // Validate form fields
    const accountHolderName = document.getElementById('account-holder-name').value;
    const dob = document.getElementById('dob').value;

    // Regex pattern to validate date format dd/mm/yyyy
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!datePattern.test(dob)) {
        alert('Date of Birth must be in the format DD/MM/YYYY.');
        return;
    }

    // Check if date is valid
    const [day, month, year] = dob.split('/').map(Number);
    const validDay = day >= 1 && day <= 31;
    const validMonth = month >= 1 && month <= 12;
    const validYear = year >= 1900 && year <= 2024;

    if (!validDay || !validMonth || !validYear) {
        alert('Date of Birth must be a valid date.');
        return;
    }

    // Redirect to 3page.html after validation
    window.location.href = '3page.html';
});
        
