var express = require('express');
var router = express.Router();
var nodemailer = require('nodemalier');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('comunicateconnosotros');
});
router.post('/comunicateconnosotros', async(req, res, next)) {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'michumanzoni@gmail.com',
    subject: 'contacto desde la Web',
    html: nombre + " " + "se contacto a traves y quiere mas info a este correo: " + email + ". <br> Y dejo como mensaje: " + mensaje + ". Su telefono es " + telefono
  }
var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port:process.env.SMTP_PORT,
  auth:{
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
  
})
var info= await transporter.sendMail(obj);
res.render('comunicateconnosotros', {
  message: 'Mensaje enviado correctamente',
});
}
module.exports = router;
