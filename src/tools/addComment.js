const addComment = (comment) => {
    const body = document.querySelector('.body')

    const commentBox = document.createElement('p')

    const commentName = document.createElement('div')
    commentName.textContent = comment.name

    const commentEmail = document.createElement('div')
    commentEmail.textContent = comment.email

    const commentBody = document.createElement('div')
    commentBody.textContent = comment.body

    commentBox.append(commentName)
    commentBox.append(commentEmail)
    commentBox.append(commentBody)

    body.prepend(commentBox)
}

export { addComment }