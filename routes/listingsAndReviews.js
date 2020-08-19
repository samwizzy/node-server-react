var express = require('express');
var router = express.Router();
var Todos = require('../src/models/Todos')

/* GET todos listing. */
router.get('/', function(req, res, next) {
  Todos.find({}, function(err, doc){
    if (err) res.json(err);

    res.status(200).json(doc);
  })
});

module.exports = router;
