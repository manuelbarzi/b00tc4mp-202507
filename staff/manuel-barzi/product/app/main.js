var loggedInEmail = null

// register

var registerView = document.querySelector('#registerView')
registerView.style.display = 'none'

var registerForm = registerView.querySelector('#registerForm')

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var fullName = registerForm.fullName.value
    var dateOfBirth = registerForm.dateOfBirth.value
    var email = registerForm.email.value
    var password = registerForm.password.value

    logic.registerUser(fullName, dateOfBirth, email, password)

    registerForm.reset()

    registerView.style.display = 'none'
    loginView.style.display = 'block'
})

var loginLink = registerView.querySelector('#loginLink')

loginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = 'block'
})

// login

var loginView = document.querySelector('#loginView')

var loginForm = loginView.querySelector('#loginForm')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var email = loginForm.email.value
    var password = loginForm.password.value

    logic.loginUser(email, password)

    loginForm.reset()

    loggedInEmail = email

    var userInfo = logic.getUserInfo(loggedInEmail)

    var fullNameSpan = homeView.querySelector('#fullNameSpan')
    fullNameSpan.textContent = userInfo.fullName

    loginView.style.display = 'none'
    homeView.style.display = 'block'
})

var registerLink = loginView.querySelector('#registerLink')

registerLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = 'block'
})

// home

var homeView = document.querySelector('#homeView')
homeView.style.display = 'none'

var changeEmailForm = homeView.querySelector('#changeEmailForm')

changeEmailForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var email = changeEmailForm.email.value
    var newEmail = changeEmailForm.newEmail.value
    var newEmailRepeat = changeEmailForm.newEmailRepeat.value

    logic.changeUserEmail(email, newEmail, newEmailRepeat)

    changeEmailForm.reset()

    alert('e-mail changed')
})

var changePasswordForm = homeView.querySelector('#changePasswordForm')

changePasswordForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var password = changePasswordForm.password.value
    var newPassword = changePasswordForm.newPassword.value
    var newPasswordRepeat = changePasswordForm.newPasswordRepeat.value

    logic.changeUserPassword(loggedInEmail, password, newPassword, newPasswordRepeat)

    changePasswordForm.reset()

    alert('password changed')
})

var logoutButton = homeView.querySelector('#logoutButton')

logoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    loggedInEmail = null

    homeView.style.display = 'none'
    loginView.style.display = 'block'
})