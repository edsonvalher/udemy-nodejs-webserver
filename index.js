const http = require('http')

const server = http.createServer((request, response) => {

    //response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //response.writeHead(200, { 'Content-Type': 'application/csv' })



    response.write('Hola Mundo')
    response.end()

})

server.listen(8080)
console.log("escuchando...", 8080)