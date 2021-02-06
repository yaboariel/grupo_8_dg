const path = require('path');

const menues =  [{ plato:"Carpaccio fresco", 
detalle:"Entrada Carpaccio de salmón con cítricos",                    
precio:"65.50"}, {plato:"Risotto de berenjena", 
detalle:"Risotto de berenjena y queso de cabra",                    
precio:"47.00"}, {plato:"Mousse de arroz", 
detalle:"Mousse de arroz con leche y aroma de azahar",                    
precio:"27.50"}, 
{ plato:"Espárragos blancos", 
detalle:"Espárragos blancos con vinagreta de verduras y jamón ibérico",                    
precio:"37.50"}
];

/*let menues = ["a","b", "c"];*/



module.exports = {
    index : (req,res) =>{
        return res.render(path.resolve(__dirname, '../views/web/home'),{menues: menues});
    },
    /*about : (req,res) =>{
        return res.render('about');
    },
    detalleMenu : (req,res) =>{
        return res.render('detalleMenu',{menues: menues,nummenu : req.params.id});
    }*/

    /*poner los directorios correctamente */

    /*const path = require('path');
    let miFamilia = ['Gloria','Indira','Victor','Luis','Zulay','Yelena','Henry','Yuraima'];
    
    module.exports = {
        index : (req,res) =>{
            return res.render(path.resolve(__dirname, '../views/web/home'),{titulo: 'Portafolio de Cristian', miFamilia});
        },
        about : (req,res) =>{
            return res.render(path.resolve(__dirname, '../views/web/about'), {titulo: 'About de Cristian'});
        } 
    
    
    }
*/
    
}