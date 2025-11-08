const form = document.querySelector('form')

form.addEventListener('keyup', (event) => {
    event.preventDefault()
    // console.log('keyup')
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log('submit')
})