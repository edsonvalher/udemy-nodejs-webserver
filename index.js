
const express = require('express')
const app = express()

const port = 8080

app.set('view engine', 'hbs')

//middleware contenido estatico html
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Edson Valenzuela',
        titulo: 'Curso de Node'
    })
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su ruta')
})


app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.listen(port, () => { console.log(`app listening at http://localhost:${port}`) })