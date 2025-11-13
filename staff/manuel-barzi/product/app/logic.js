var logic = {}

/**
 * Registers a user in the system.
 * 
 * @param {string} fullName The full name of the user.
 * @param {string} dateOfBirth The date of birth of the user.
 * @param {string} email The e-mail of the user.
 * @param {string} password The password of the user.
 */
logic.registerUser = function (fullName, dateOfBirth, email, password) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) throw new Error('user already exits')
    }

    var user = {
        fullName: fullName,
        dateOfBirth: dateOfBirth,
        email: email,
        password: password
    }

    data.users.push(user)
}

/**
 * Logs a user in the system.
 * 
 * @param {string} email The e-mail of the user.
 * @param {string} password The password of the user. 
 */
logic.loginUser = function (email, password) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            if (user.password === password) {
                return
            }

            throw new Error('wrong password')
        }
    }

    throw new Error('wrong email')
}

/**
 * Gets user info in the system.
 * 
 * @param {string} email The e-mail of the user.
 * 
 * @returns The public information of the user (fullName, dateOfBirth, email). 
 */
logic.getUserInfo = function (email) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            return {
                fullName: user.fullName,
                dateOfBirth: user.dateOfBirth,
                email: user.email
            }
        }
    }

    throw new Error('user not found')
}

/**
 * Changes the user password in the system.
 * 
 * @param {string} email The e-mail of the user.
 * @param {string} newEmail The new e-mail of the user.
 * @param {string} newEmailRepeat The repetition of the new e-mail of the user.
 */
logic.changeUserEmail = function (email, newEmail, newEmailRepeat) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i];

        if (user.email === email) {
            if (newEmail === newEmailRepeat) {
                user.email = newEmail

                return
            }

            throw new Error('new e-mail does not match new e-mail repeat')
        }
    }

    throw new Error('user not found')
}

/**
 * Changes the user password in the system.
 * 
 * @param {string} email The e-mail of the user.
 * @param {string} password The current password of the user.
 * @param {string} newPassword The new password of the user.
 * @param {string} newPassowrdRepeat The repetition of the new password of the user. 
 */
logic.changeUserPassword = function (email, password, newPassword, newPassowrdRepeat) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            if (user.password === password) {
                if (newPassword === newPassowrdRepeat) {

                    user.password = newPassword

                    return
                }

                throw new Error('new password does not match new password repeat')
            }

            throw new Error('wrong password')
        }
    }

    throw new Error('user not found')
}

/**
 * Returns all posts in the system.
 * 
 * @param {string} email The e-mail of the user.
 * @returns An array of posts.
 */
logic.getPosts = function (email) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            var posts2 = []

            for (var j = 0; j < data.posts.length; j++) {
                var post = data.posts[j]

                var post2 = {
                    author: post.author,
                    image: post.image,
                    text: post.text,
                    date: post.date
                }

                if (post.author === email) {
                    post2.own = true
                } else {
                    post2.own = false
                }

                posts2.push(post2)
            }

            return posts2
        }
    }

    throw new Error('user not found')
}


/** 
 * Adds a post to the system.
 * 
 * @param {string} email The e-mail of the user.
 * @param {string} image The image URL of the post.
 * @param {string} text The text content of the post.
 */
logic.addPost = function (email, image, text) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            var post = {
                author: email,
                image: image,
                text: text,
                date: new Date().toISOString()
            }

            data.posts.push(post)

            return
        }
    }

    throw new Error('user not found')
}