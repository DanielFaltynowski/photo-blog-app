const showPost = (posts, postObject) => {
    // ===== Creating new post =====
    const post = document.createElement('p')
    post.classList.add('post')
    post.id = postObject.id
    

    // ===== Creating post content =====
    const postUsername = document.createElement('div')
    postUsername.classList.add('post-username')
    postUsername.textContent = postObject.username
    
    const postTitle = document.createElement('div')
    postTitle.classList.add('post-title')
    postTitle.textContent = postObject.title
    
    const postBody = document.createElement('div')
    postBody.classList.add('post-body')
    postBody.textContent = postObject.body
    
    const postCommentsButton = document.createElement('a')
    postCommentsButton.textContent = 'See Comments'
    postCommentsButton.style.margin = '5px'
    postCommentsButton.href = `http://127.0.0.1:5500/src/comments/index.html?postId=${postObject.id}`
    
    const postUserButton = document.createElement('a')
    postUserButton.textContent = 'See User\'s Profile'
    postUserButton.style.margin = '5px'
    postUserButton.href = `http://127.0.0.1:5500/src/user/index.html?userId=${postObject.userId}`
    

    // ===== Appending created content to the post =====
    post.append(
        postUsername, 
        postTitle, 
        postBody, 
        postCommentsButton, 
        postUserButton
    )


    // ===== Appending completed post to the posts list =====
    posts.prepend(post)
}

export { showPost }