const express = require('express')
const app = express()

const port = 8080
app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su ruta')
})


app.get('/*', (req, res) => {
    res.send('404 page not found')
})
app.listen(port, () => { console.log(`app listening at http://localhost:${port}`) })