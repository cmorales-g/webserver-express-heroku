const express = require('express');
const app = express();

const hbs = require('hbs');

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS engine

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//helpers

app.get('/', (req, res) => {
    // res.send('Hola mundo');

    // let salida = {
    //     nombre: 'fernando',
    //     edad: 32,
    //     url: req.url,
    // };

    res.render('home', {
        nombre: 'Fernando',
        anio: new Date().getFullYear(),
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Cristian',
        anio: new Date().getFullYear(),
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});