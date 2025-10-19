import { getData } from './getData.js'

const addPost = (posts, post) => {
    const postBox = document.createElement('div')
    postBox.classList.add('post-box')

    const postUser = document.createElement('div')
    postUser.classList.add('post-user')
    postUser.textContent = post.userId


    const postTitle = document.createElement('div')
    postTitle.classList.add('post-title')
    postTitle.textContent = post.title

    const postBody = document.createElement('div')
    postBody.classList.add('post-body')
    postBody.textContent = post.body

    postBox.append(postUser)
    postBox.append(postTitle)
    postBox.append(postBody)

    posts.prepend(postBox)
}

export { addPost }