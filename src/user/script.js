import { getData } from '../tools/getData.js'
import { addUser } from '../tools/addUser.js'

const params = new URLSearchParams(window.location.search)
const userId = params.get("id")

const body = document.querySelector('.body')
const loading = document.querySelector('.loading')
const fatal = document.querySelector('.fatal')

let users = []
let albums = []

await getData('https://jsonplaceholder.typicode.com/users')
    .then((data) => {
        users.push(...data)
        body.style.display = 'block'
        body.style.border = 'solid'
        body.style.padding = '15px'
        loading.style.display = 'none'
    })
    .catch((error) => {
        loading.style.display = 'none'
        fatal.style.display = 'block'
        
    })

await getData('https://jsonplaceholder.typicode.com/albums')
    .then((data) => [
        albums.push(...data)
    ])
    

users = users.filter((u) => u.id === parseInt(userId))

albums = albums.filter((a) => a.userId === parseInt(userId))

if (users.length < 1) {
    loading.style.display = 'none'
    body.style.display = 'none'
    fatal.style.display = 'block'
} else {
    const user = users[0]
    addUser(user, albums)
}

