const http = require('http')

const server = http.createServer((request, response) => {

    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    response.writeHead(200, { 'Content-Type': 'application/csv' })

    response.write('id,nombre\n')
    response.write('1,Maria\n')
    response.write('2,Juan\n')
    response.write('3,Pedro\n')
    response.end()

})

server.listen(8080)
console.log("escuchando...", 8080)