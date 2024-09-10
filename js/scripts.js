
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("intro-page").style.display = "none";
        document.getElementById("main-page").style.display = "block";
    }, 5000); // 5 seconds delay
});

  // JavaScript for handling captcha refresh and floating icon behavior

// Refresh captcha image when clicked
document.querySelector('.refresh-icon').addEventListener('click', function() {
    document.querySelector('.captcha-image').src = 'images/image-capture.png?' + new Date().getTime(); // This simulates the refresh by changing image source
});

// Smooth scroll behavior for floating bot icon
document.querySelector('.floating-icon').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Placeholder for additional JS functions
console.log("Page scripts loaded.");
  
