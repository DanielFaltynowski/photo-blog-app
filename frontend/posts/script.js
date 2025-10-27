// ===== Imports =====

import { getData } from '../tools/getData.js'
import { showPost } from '../tools/showPost.js'

// =====


// ===== Query Selectors =====

const contentLoading = document.querySelector('.content-loading')
const contentReady = document.querySelector('.content-ready')
const contentError = document.querySelector('.content-error')
const posts = document.querySelector('.posts')

// =====


// ===== Data =====

let isError = false

const dataPosts = []
const dataUsers = []
const dataPostsProcessed = []
const dataUsersProcessed = {}

// =====


// ===== Collecting data =====

await getData('https://jsonplaceholder.typicode.com/posts')
.then((data) => {
    dataPosts.push(...data)
})
.catch((error) => {
    isError = true
    contentLoading.style.display = 'none'
    contentError.style.display = 'block'
    contentError.textContent = error
})

await getData('https://jsonplaceholder.typicode.com/users')
.then((data) => {
    dataUsers.push(...data)
})
.catch((error) => {
    isError = true
    contentLoading.style.display = 'none'
    contentError.style.display = 'block'
    contentError.textContent = error
})

// =====


if (!isError) {
    // ===== Processing data =====
    
    dataUsers.forEach((user) => {
        dataUsersProcessed[user.id] = user
    })
    
    dataPosts.forEach((post) => {
        const postProcessed = post
        postProcessed.username = dataUsersProcessed[post.userId].username
        dataPostsProcessed.push(postProcessed)
    })
    
    // =====
    
    
    // ===== Displaying data to the feed =====
    
    dataPostsProcessed.forEach((post) => {
        showPost(posts, post)
    })
    
    contentLoading.style.display = 'none'
    contentReady.style.display = 'block'
    
    // =====
}
