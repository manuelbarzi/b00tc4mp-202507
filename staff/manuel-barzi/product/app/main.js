var registerForm = document.getElementById('register-form')

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var fullName = registerForm.fullName.value
    var dateOfBirth = registerForm.dateOfBirth.value
    var email = registerForm.email.value
    var password = registerForm.password.value

    logic.registerUser(fullName, dateOfBirth, email, password)
})