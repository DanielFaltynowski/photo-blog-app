// ===== Imports =====
import { getData } from '../tools/getData.js'
import { showComment } from '../tools/showComment.js'


// ===== URL Params =====
const params = new URLSearchParams(window.location.search)
const postId = parseInt(params.get('postId'))


// ===== Query Selectors =====
const contentLoading = document.querySelector('.content-loading')
const contentReady = document.querySelector('.content-ready')
const contentError = document.querySelector('.content-error')
const comments = document.querySelector('.comments')


// ===== Data =====
let isError = false
const dataComments = []


// ===== Collecting data =====
await getData('https://jsonplaceholder.typicode.com/comments')
.then((data) => {
    dataComments.push(...data.filter((comment) => {
        return comment.postId === postId
    }))
})
.catch((error) => {
    isError = true
    contentLoading.style.display = 'none'
    contentError.style.display = 'block'
    contentError.textContent = error
})


if (!isError) {
    // ===== Displaying each comment =====
    dataComments.forEach((comment) => {
        showComment(comments, comment)
    })

    contentLoading.style.display = 'none'
    contentReady.style.display = 'block'
}