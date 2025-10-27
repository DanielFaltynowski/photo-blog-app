// ===== Imports =====

import { getData } from '../tools/getData.js'
import { showPost } from '../tools/showPost.js'

// =====


// ===== Query Selectors =====

const contentLoading = document.querySelector('.content-loading')
const contentReady = document.querySelector('.content-ready')
const posts = document.querySelector('.posts')

// =====


// ===== Data =====

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
    console.log(error)
})

await getData('https://jsonplaceholder.typicode.com/users')
.then((data) => {
    dataUsers.push(...data)
})
.catch((error) => {
    console.log(error)
})

// =====


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
