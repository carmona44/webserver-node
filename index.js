const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 3000;

//middleware
//no necesita app.get ya que por si solo muestra todos los ficheros que se encuentren dentro de la carpeta public
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});