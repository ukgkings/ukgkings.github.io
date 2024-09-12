document.getElementById('dob').addEventListener('input', function(e) {
            let value = e.target.value;

            // Remove non-digit characters
            value = value.replace(/\D/g, '');

            // Format the value
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2);
            }
            if (value.length > 5) {
                value = value.slice(0, 5) + '/' + value.slice(5);
            }

            // Set the formatted value
            e.target.value = value;
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
        
