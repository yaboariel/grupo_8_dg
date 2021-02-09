const express = require ( 'express' );
const router=express.Router();
const mainController = require('../controllers/mainController');
router.get('/',mainController.index);
router.get('/register',mainController.register);
router.get('/login',mainController.login);



/*
router.get('./about',mainController.about);
router.get('/detalle/:id?',mainController.detalleMenu);
*/


/*router.get('/',mainController.);
*/

module.exports=router; 