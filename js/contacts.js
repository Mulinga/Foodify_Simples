// Initialize EmailJS with your public key
emailjs.init('EzSEUlM8M5oSJWpr6'); // <-- Your Public Key

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Show sending status
    document.getElementById("status").innerHTML = "Sending...";

    // Send email using EmailJS
    emailjs.send(
        "service_2zei705",    // <-- Your Service ID
        "template_st0kwd7",   // <-- Your Template ID
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
    )
    .then(function() {
        document.getElementById("status").innerHTML = "Message sent successfully!";
        document.getElementById("contactForm").reset(); // Reset form after success
    }, function(error) {
        document.getElementById("status").innerHTML = "Failed to send message. Please try again.";
        console.error("EmailJS error:", error); // Log error for debugging
    });
});
