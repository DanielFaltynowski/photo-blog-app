import { getData } from '../tools/getData.js'
import { addPost } from '../tools/addPost.js'

const posts = document.querySelector('.posts')

getData('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        console.log(data)
        data.forEach(post => {
            addPost(posts, post)
        })
    })
    .catch(error => console.log(error))
