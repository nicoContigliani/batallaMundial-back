const express = require('express');
const router = express.Router();

const users = require('../Apiservices/user/userRoutes')

const validateToken = require("../middlewares/auth");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.use('/users', validateToken, users);


module.exports = router;