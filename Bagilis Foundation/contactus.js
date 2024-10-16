// Initialize EmailJS with your User ID
(function() {
    emailjs.init("5Xw4FGB2EM3WK1Qoj"); // Replace with your EmailJS user ID
    console.log("EmailJS Initialized");
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Prepare the email parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_qgkg0iv', 'template_5gwd76x', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('formMessage').innerText = 'Thank you for contacting us!';
            document.getElementById('contactForm').reset(); // Reset form fields
        }, function(error) {
            console.error('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });
});
