import { getData } from '../tools/getData.js'
import { addPhoto } from '../tools/addPhoto.js'

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

photos.forEach((photo) => {
    addPhoto(photo)
})