const express = require('express');
const router = express.Router();
const auth = require('./authController');

router.get('/', auth.get);

 router.post('/register',auth.register)
 router.post('/login',auth.login);
// router.post('/register', function(req, res, next) {
//   res.send('rutausuariosssss');
// });

module.exports = router;