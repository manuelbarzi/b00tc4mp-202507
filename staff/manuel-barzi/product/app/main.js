let loggedInEmail = null

// register

let registerView = document.querySelector('#registerView')
registerView.style.display = 'none'

let registerForm = registerView.querySelector('#registerForm')

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    let fullName = registerForm.fullName.value
    let dateOfBirth = registerForm.dateOfBirth.value
    let email = registerForm.email.value
    let password = registerForm.password.value

    logic.registerUser(fullName, dateOfBirth, email, password)

    registerForm.reset()

    registerView.style.display = 'none'
    loginView.style.display = 'block'
})

let loginLink = registerView.querySelector('#loginLink')

loginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = 'block'
})

// login

let loginView = document.querySelector('#loginView')

let loginForm = loginView.querySelector('#loginForm')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    let email = loginForm.email.value
    let password = loginForm.password.value

    logic.loginUser(email, password)

    loginForm.reset()

    loggedInEmail = email

    let userInfo = logic.getUserInfo(loggedInEmail)

    let fullNameSpan = homeView.querySelector('#fullNameSpan')
    fullNameSpan.textContent = userInfo.fullName

    let posts = logic.getPosts(loggedInEmail)

    postList.innerHTML = ''

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i]

        let postElement = document.createElement('div')

        postElement.innerHTML = `
            <h3>${post.author}</h3>
            <img src="${post.image}" width="200">
            <p>${post.text}</p>
            <small>${post.date}</small>
            ${post.own === true? '<button id="deletePostButton" type="button">🗑️</button>' : ''}
        `

        if (post.own === true) {
            let deletePostButton = postElement.querySelector('#deletePostButton')
    
            deletePostButton.addEventListener('click', function (event) {
                event.preventDefault()
    
                logic.deletePost(loggedInEmail, post.id)
    
                postList.removeChild(postElement)
            })
        }

        postList.appendChild(postElement)
    }

    loginView.style.display = 'none'
    homeView.style.display = 'block'
})

let registerLink = loginView.querySelector('#registerLink')

registerLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = 'block'
})

// home

let homeView = document.querySelector('#homeView')
homeView.style.display = 'none'

let changeEmailForm = homeView.querySelector('#changeEmailForm')

changeEmailForm.addEventListener('submit', function (event) {
    event.preventDefault()

    let email = changeEmailForm.email.value
    let newEmail = changeEmailForm.newEmail.value
    let newEmailRepeat = changeEmailForm.newEmailRepeat.value

    logic.changeUserEmail(email, newEmail, newEmailRepeat)

    changeEmailForm.reset()

    alert('e-mail changed')
})

let changePasswordForm = homeView.querySelector('#changePasswordForm')

changePasswordForm.addEventListener('submit', function (event) {
    event.preventDefault()

    let password = changePasswordForm.password.value
    let newPassword = changePasswordForm.newPassword.value
    let newPasswordRepeat = changePasswordForm.newPasswordRepeat.value

    logic.changeUserPassword(loggedInEmail, password, newPassword, newPasswordRepeat)

    changePasswordForm.reset()

    alert('password changed')
})

let logoutButton = homeView.querySelector('#logoutButton')

logoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    loggedInEmail = null

    homeView.style.display = 'none'
    loginView.style.display = 'block'
})

let profilePanel = homeView.querySelector('#profilePanel')

profilePanel.style.display = 'none'

let profileLink = homeView.querySelector('#profileLink')

profileLink.addEventListener('click', function (event) {
    event.preventDefault()

    postList.style.display = 'none'
    addPostPanel.style.display = 'none'
    profilePanel.style.display = 'block'
})

let homeLink = homeView.querySelector('#homeLink')

homeLink.addEventListener('click', function (event) {
    event.preventDefault()

    profilePanel.style.display = 'none'
    addPostPanel.style.display = 'none'
    postList.style.display = 'block'
})

let postList = homeView.querySelector('#postList')

let addPostButton = homeView.querySelector('#addPostButton')

addPostButton.addEventListener('click', function (event) {
    event.preventDefault()

    postList.style.display = 'none'
    profilePanel.style.display = 'none'
    addPostPanel.style.display = 'block'
})

let addPostPanel = homeView.querySelector('#addPostPanel')

addPostPanel.style.display = 'none'

let addPostForm = addPostPanel.querySelector('#addPostForm')

addPostForm.addEventListener('submit', function (event) {
    event.preventDefault()

    let image = addPostForm.image.value
    let text = addPostForm.text.value

    logic.addPost(loggedInEmail, image, text)

    addPostForm.reset()

    let posts = logic.getPosts(loggedInEmail)

    postList.innerHTML = ''

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i]

        let postElement = document.createElement('div')

        postElement.innerHTML = `
            <h3>${post.author}</h3>
            <img src="${post.image}" width="200">
            <p>${post.text}</p>
            <small>${post.date}</small>
            ${post.own === true? '<button id="deletePostButton" type="button">🗑️</button>' : ''}
        `

        if (post.own === true) {
            let deletePostButton = postElement.querySelector('#deletePostButton')
    
            deletePostButton.addEventListener('click', function (event) {
                event.preventDefault()
    
                logic.deletePost(loggedInEmail, post.id)
    
                postList.removeChild(postElement)
            })
        }

        postList.appendChild(postElement)
    }

    addPostPanel.style.display = 'none'
    postList.style.display = 'block'
})