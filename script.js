document.getElementById('mobile-number').addEventListener('input', function(event) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, '').slice(0, 10);
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const mobileNumber = document.getElementById('mobile-number').value;

    // Check if the mobile number is exactly 10 digits
    if (mobileNumber.length === 10) {
        // Redirect to 2page.html after validation
        window.location.href = '2page.html';
    }
});

// Captcha logic
const imageCaptcha = document.getElementById('image-captcha');
const audioCaptcha = document.getElementById('audio-captcha');
const captchaImage = document.getElementById('captcha-image');

// Set image captcha as default checked
imageCaptcha.checked = true;
captchaImage.src = 'image-capture.png';  // Default image on load

// Function to update the captcha image
function updateCaptchaImage() {
    if (imageCaptcha.checked) {
        captchaImage.src = 'image-capture.png';  // Show image captcha
    } else if (audioCaptcha.checked) {
        captchaImage.src = 'audio-capture.png';  // Show audio captcha
    }
}

// Add event listeners to update the image when radio buttons are clicked
imageCaptcha.addEventListener('change', updateCaptchaImage);
audioCaptcha.addEventListener('change', updateCaptchaImage);
    
