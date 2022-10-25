var express = require('express');
var router = express.Router();

 const auth = require('../Apiservices/auth/authRoutes')

 router.use('/auth', auth);
// router.post('/auth', function(req, res, next) {
//   res.send('rutausuariollll');
// });

module.exports = router;
