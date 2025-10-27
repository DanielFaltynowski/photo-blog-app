const showComment = (comments, commentObject) => {
    // ===== Creating new comment =====

    const comment = document.createElement('p')
    comment.id = commentObject.id

    // =====


    // ===== Creating comment content =====

    const commentName = document.createElement('div')
    commentName.classList.add('content-name')
    commentName.textContent = commentObject.name
    
    const commentEmail = document.createElement('div')
    commentEmail.classList.add('content-email')
    commentEmail.textContent = commentObject.email
    
    const commentBody = document.createElement('div')
    commentBody.classList.add('content-body')
    commentBody.textContent = commentObject.body

    // =====


    // ===== Appending created content to the post =====

    comment.append(commentName)
    comment.append(commentEmail)
    comment.append(commentBody)

    // =====


    // ===== Appending completed post to the posts list =====

    comments.prepend(comment)

    // =====
}

export { showComment }