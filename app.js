const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nome: 'Daniel da Silva',
        titulo: 'Programador Full Stack'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nome: 'Daniel da Silva',
        titulo: 'Programador Full Stack'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nome: 'Daniel da Silva',
        titulo: 'Programador Full Stack'
    });
})

app.get('*', (req, res) => {
    res.write('404 - Page not found');
    res.end();
})

app.listen(port, () => {
    console.log(`Porta ${port} rodando com sucesso!`);
});