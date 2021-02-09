const express=require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('./public'));
const webRouter = require('./routes/webRouter');

app.use('/',webRouter);


app.listen('3001', () => console.log('Servidor esta corriendo en el puerto 3001'));
