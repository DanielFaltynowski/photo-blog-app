const addPost = (posts, user, post) => {
    const postBox = document.createElement('p')
    postBox.classList.add('post-box')
    postBox.style.border = 'solid'

    const postUser = document.createElement('a')
    postUser.classList.add('post-user')
    postUser.textContent = user.username
    postUser.href = `http://127.0.0.1:5500/src/user/user.html?id=${user.id}`

    const postTitle = document.createElement('div')
    postTitle.classList.add('post-title')
    postTitle.textContent = post.title

    const postBody = document.createElement('div')
    postBody.classList.add('post-body')
    postBody.textContent = post.body

    const postComments = document.createElement('a')
    postComments.classList.add('post-comments')
    postComments.textContent = 'See Comments'
    postComments.href = `http://127.0.0.1:5500/src/comments/comments.html?id=${post.id}`

    postBox.append(postUser)
    postBox.append(postTitle)
    postBox.append(postBody)
    postBox.append(postComments)

    posts.prepend(postBox)
}

export { addPost }