import { getData } from '../tools/getData.js'

const posts = []

getData('https://jsonplaceholder.typicode.com/posts')
.then((data) => console.log(data))
.catch((error) => console.log(error))
