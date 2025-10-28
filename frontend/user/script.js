// ===== Imports =====

import { getData } from '../tools/getData.js'
import { showUser } from '../tools/showUser.js'
import { showAlbum } from '../tools/showAlbum.js'
import { showTodo } from '../tools/showTodo.js'

// =====


// ===== URL Params =====

const params = new URLSearchParams(window.location.search)
const userId = parseInt(params.get('userId'))

// =====


// ===== Query Selectors =====

const contentLoading = document.querySelector('.content-loading')
const contentReady = document.querySelector('.content-ready')
const contentError = document.querySelector('.content-error')
const user = document.querySelector('.user')
const albums = document.querySelector('.albums')
const todos = document.querySelector('.todos')

// =====



// ===== Data =====

let isError = false
let dataUser = {}
const dataAlbums = []
const dataTodos = []

// =====


// ===== Collecting data =====

await getData('https://jsonplaceholder.typicode.com/users')
.then((data) => {
    dataUser = data.filter((user) => user.id === userId)[0]
})
.catch((error) => {
    isError = true
    contentLoading.style.display = 'none'
    contentError.style.display = 'block'
    contentError.textContent = error
})

await getData('https://jsonplaceholder.typicode.com/albums')
.then((data) => {
    dataAlbums.push(...data.filter((album) => album.userId === userId))
})
.catch((error) => {
    isError = true
    contentLoading.style.display = 'none'
    contentError.style.display = 'block'
    contentError.textContent = error
})

await getData('https://jsonplaceholder.typicode.com/todos')
.then((data) => {
    dataTodos.push(...data.filter((todo) => todo.userId === userId))
})
.catch((error) => {
    isError = true
    contentLoading.style.display = 'none'
    contentError.style.display = 'block'
    contentError.textContent = error
})

// =====


if (!isError) {
    showUser(user, dataUser)

    dataAlbums.forEach((album) => {
        showAlbum(albums, album)
    })

    dataTodos.forEach((todo) => {
        showTodo(todos, todo)
    })

    contentLoading.style.display = 'none'
    contentReady.style.display = 'block'
}