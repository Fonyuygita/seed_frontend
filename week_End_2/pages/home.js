document.addEventListener("DOMContentLoaded", function () {
    const getStarted = document.getElementById("getStartedBtn")
    const registerPopup = document.getElementById("registerPopUp")
    const closeBtn = document.getElementById("closePopup")
    console.log(getStarted)
    console.log(registerPopup)

    getStarted.addEventListener('click', function () {
        // click the get started button to see the popup
        registerPopup.style.display = "flex"
        document.body.style.overflow = 'hidden'
    })

    closeBtn.addEventListener('click', function () {
        registerPopup.style.display = "none"
    })

    registerPopup.addEventListener('click', function (e) {
        // console.log(e.target);
        if (e.target === registerPopup) {
            registerPopup.style.display = "none"
            document.body.style.overflow = 'auto'
        }
    })

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting to a server

        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Here you would typically send this data to a server
        // For now, we'll just log it and show a success message
        console.log('Registration details:', {
            username,
            email,
            password
        });

        alert('Registration successful!');
        registerPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
        registerForm.reset(); // Clear the form
    });

})



// first order functions in javascript
