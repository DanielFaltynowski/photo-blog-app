import { getData } from '../tools/getData.js'
import { addPost } from '../tools/addPost.js'

const postsDiv = document.querySelector('.posts')

const posts = []
const users = []

await getData('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        postsDiv.textContent = ''
        posts.push(...data)
    })
    .catch((error) => console.log(error))
    
await getData('https://jsonplaceholder.typicode.com/users')
    .then((data) => {
        users.push(...data)
    })

posts.forEach((post) => {
    let user = users.filter(u => u.id === post.userId)[0]
    addPost(postsDiv, user, post)
})