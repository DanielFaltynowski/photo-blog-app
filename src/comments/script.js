import { getData } from "../tools/getData.js"
import { addComment } from "../tools/addComment.js"

const params = new URLSearchParams(window.location.search)
const postId = params.get('id')

let comments = []

await getData('https://jsonplaceholder.typicode.com/comments')
    .then((data) => {
        comments.push(...data)
    })
    .catch((error) => {
        console.log(error)
    })

comments = comments.filter(comment => comment.postId === parseInt(postId))

comments.forEach((comment) => {
    addComment(comment)
})