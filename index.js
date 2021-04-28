
require('dotenv').config()
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT



//handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', (error) => { })

//middleware contenido estatico html
app.use(express.static('public'))

/*
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
    //res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', {
        nombre: 'Edson Valenzuela',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    //res.render('generic')
    res.render('generic', {
        nombre: 'Edson Valenzuela',
        titulo: 'Curso de Node'
    })
    //res.sendFile(__dirname + '/public/generic.html')
})
*/
app.get('*', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})

app.listen(port, () => { console.log(`app listening at http://localhost:${port}`) })