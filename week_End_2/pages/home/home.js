// alert("connected.........")

const getStarted = document.getElementById("getStartedBtn")
const popup = document.getElementById("popupContainer")
const closeBtn = document.getElementById("close")
const form = document.getElementById("formContainer")
// const form = document.getElementByClassName("form")
const paragraph = document.getElementsByTagName("p")
console.log(paragraph)
console.log(getStarted)

// what happens when i carry out a particular action
getStarted.addEventListener('click', function () {
    popup.style.display = "flex"
})

// first get the close icon, the popup- when you click the close icon, the popup disappears
// what happen when we click the close btn
// state of your ui

closeBtn.addEventListener('click', function () {
    // console.log("you clicked me........")
    popup.style.display = "none"
    // 1000 lines->perform the action here

})

//  VALIDATING OUR FORM INPUTS:
form.addEventListener('submit', function () {
    // perform action, when we submit the form
    // we need the password value and the confirm password value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value
    // console.log("This is my password", password)
    if (password !== confirmPassword) {
        alert("Password does not match")
        return;
    }


})


