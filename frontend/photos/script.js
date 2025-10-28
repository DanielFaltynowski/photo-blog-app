// ===== Imports =====
import { getData } from '../tools/getData.js'
import { showPhoto } from '../tools/showPhoto.js'


// ===== URL Params =====
const params = new URLSearchParams(window.location.search)
const albumId = parseInt(params.get('albumId'))


// ===== Query Selectors =====
const contentLoading = document.querySelector('.content-loading')
const contentReady = document.querySelector('.content-ready')
const contentError = document.querySelector('.content-error')
const photos = document.querySelector('.photos')


// ===== Data =====
let isError = false
const dataPhotos = []


// ===== Collecting data =====
await getData('https://jsonplaceholder.typicode.com/photos')
.then((data) => {
    dataPhotos.push(...data.filter((photo) => photo.albumId === albumId))
})
.catch((error) => {
    isError = true
    contentLoading.style.display = 'none'
    contentError.style.display = 'block'
    contentError.textContent = error
})



if (!isError) {
    // ===== Displaying photos =====
    
    dataPhotos.forEach((photo) => {
        showPhoto(photos, photo)
    })

    contentLoading.style.display = 'none'
    contentReady.style.display = 'block'
}