const express = require('express');
const router = express.Router();

const users = require('../Apiservices/user/userRoutes')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use('/users', users);


module.exports = router;