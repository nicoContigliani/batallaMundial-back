const express = require('express');
const router = express.Router();
const user = require('./userController')

router.get('/', user.get)
router.get('/:data', user.getId)
router.post('/', user.save)
router.put('/:data', user.updateS)
router.delete('/:data', user.deleteUser)
//  router.put('/arbol', function(req, res, next) {
//    res.send('no se inunda másssss');
//  });

module.exports = router;