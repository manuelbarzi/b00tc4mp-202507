let data = {}

data.users = []
data.posts = []
data.postsCounter = 0

// populate users

data.users.push({
    dateOfBirth: '1985-10-15',
    email: 'peter@pan.com',
    fullName: 'Peter Pan',
    password: '123123123'
})

data.users.push({
    dateOfBirth: '1990-05-20',
    email: 'wendy@darling.com',
    fullName: 'Wendy Darling',
    password: '123123123'
})

// populate posts

data.posts.push({
    id: 'post-' + data.postsCounter,
    author: 'peter@pan.com',
    image: 'https://i.pinimg.com/564x/0b/bd/1c/0bbd1ccbb8c0cf5a430479b6b8c4ab6c.jpg',
    text: 'Just flew over London! #happy #flying',
    date: '2024-06-01T10:01:00Z'
})
data.postsCounter++

data.posts.push({
    id: 'post-' + data.postsCounter,
    author: 'wendy@darling.com',
    image: 'https://farm8.static.flickr.com/7230/7282196972_9455f770cc_b.jpg',
    text: 'I was so happy in Disneyland! #magical #fun',
    date: '2024-06-01T12:25:00Z'
})
data.postsCounter++
