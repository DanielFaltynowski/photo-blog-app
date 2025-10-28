const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request.url, request.method)
    
    // Ustawienie typu zawartości (Content-Type)
    response.setHeader('Content-Type', 'text/html')
    
    response.write('<h1>Hello from Node.js server!</h1>')
    response.end()
})

server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000')
})