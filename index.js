const http = require('http')

const server = http.createServer((request, response) => {
    response.write('Hola Mundo')
    response.end()

})

server.listen(8080)
console.log("escuchando...", 8080)