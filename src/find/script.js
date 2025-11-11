// ===== Imports =====
import { getData } from '../tools/getData.js'


// ===== Query Selectors =====
const form = document.querySelector('form')
const noUser = document.querySelector('.no-user')


// ===== Data =====
const users = []


// ===== Collecting data =====
await getData('https://jsonplaceholder.typicode.com/users')
.then((data) => {
    users.push(...data)
})
.catch((error) => {
    console.log('Could not fetch the users!')
})


// ===== Finding user by different methods =====
form.addEventListener('submit', (event) => {
    // ===== Prevent reloading page while submit =====
    event.preventDefault()


    // ===== Search whether the user exists or not =====
    const userDef = event.target.elements.username.value
    const user = users.filter(u => ((u.name === userDef) || (u.username === userDef) || u.id === parseInt(userDef)))


    // ===== Behaviour depending on the result of previous action =====
    if (user.length === 1) {
        window.location.href = `http://127.0.0.1:5500/src/user/index.html?userId=${user[0].id}`
    } else {
        noUser.style.display = 'block'
    }
})


