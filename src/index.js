const express=require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('./public'));
const webRouter = require('./routes/webRouter');

app.use('/',webRouter);

app.set('puerto', process.env.PORT || 3000);



app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));
