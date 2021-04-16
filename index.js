const http = require('http')

const server = http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'application/json' })

    const persona = {
        id: 1,
        nombre: 'Edson'
    }
    response.write(JSON.stringify(persona))
    response.end()

})

server.listen(8080)
console.log("escuchando...", 8080)