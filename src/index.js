const express=require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('./public'));
const webRouter = require('./routes/webRouter');

app.use('/',webRouter);

app.get("/productDetail", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
})

app.get("/productCart", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
})

app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})

app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.listen('3001', () => console.log('Servidor esta corriendo en el puerto 3001'));

