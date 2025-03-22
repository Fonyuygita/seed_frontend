document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const getStartedBtn = document.getElementById('getStartedBtn');
    const registerPopup = document.getElementById('registerPopup');
    const closePopup = document.getElementById('closePopup');
    const registerForm = document.getElementById('registerForm');

    // Show popup when Get Started button is clicked
    getStartedBtn.addEventListener('click', function () {
        registerPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    });

    // Close popup when X is clicked
    closePopup.addEventListener('click', function () {
        registerPopup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling when popup is closed
    });

    // Close popup when clicking outside the popup content
    registerPopup.addEventListener('click', function (event) {
        if (event.target === registerPopup) {
            registerPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle form submission
    // registerForm.addEventListener('submit', function (event) {
    //     event.preventDefault(); // Prevent form from submitting to a server

    //     // Get form values
    //     const username = document.getElementById('username').value;
    //     const email = document.getElementById('email').value;
    //     const password = document.getElementById('password').value;
    //     const confirmPassword = document.getElementById('confirmPassword').value;

    //     // Validate passwords match
    //     if (password !== confirmPassword) {
    //         alert('Passwords do not match!');
    //         return;
    //     }

    //     // Here you would typically send this data to a server
    //     // For now, we'll just log it and show a success message
    //     console.log('Registration details:', {
    //         username,
    //         email,
    //         password
    //     });

    //     alert('Registration successful!');
    //     registerPopup.style.display = 'none';
    //     document.body.style.overflow = 'auto';
    //     registerForm.reset(); // Clear the form
    // });
});