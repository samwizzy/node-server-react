var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo')

/* GET todos listing. */
router.get('/', function (req, res, next) {
    Todo.find({}, function (err, doc) {
        if (err) res.json(err);

        res.status(200).json(doc);
    })
});

module.exports = router;
