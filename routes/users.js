var express = require('express');
var router = express.Router();

const service = require('../services/users');


/* GET users listing. */
// la route pour lire les information d'un utilisateur
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// la route pour lire les information d'un utilisateur
router.get('/:id' , service.getById);
// la route pour ajouter d'un utilisateur
router.put('/add', service.add);
// la route pour modifier d'un utilisateur
router.patch('/:id', service.update);
// la route pour la supression d'un utilisateur
 router.delete('/:id', service.delete);

module.exports = router;
