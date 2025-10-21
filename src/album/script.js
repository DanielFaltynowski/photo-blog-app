import { getData } from '../tools/getData.js'

const params = new URLSearchParams(window.location.search)
const albumId = params.get('id')

let photos = []

await getData('https://jsonplaceholder.typicode.com/photos')
    .then((data) => [
        photos.push(...data)
    ])
    .catch((error) => {
        console.log(error)
    })

photos = photos.filter((p) => p.albumId === parseInt(albumId))

console.log(photos)

photos.forEach((photo) => {
    const body = document.querySelector('.body')

    const photoBox = document.createElement('p')

    const photoTitle = document.createElement('div')
    photoTitle.textContent = photo.title

    const photoUrl = document.createElement('div')
    photoUrl.textContent = photo.url

    const photoThumbnailUrl = document.createElement('div')
    photoThumbnailUrl.textContent = photo.thumbnailUrl

    photoBox.append(photoTitle)
    photoBox.append(photoUrl)
    photoBox.append(photoThumbnailUrl)

    body.prepend(photoBox)
})