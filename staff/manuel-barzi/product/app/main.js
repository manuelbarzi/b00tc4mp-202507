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