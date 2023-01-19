var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/:id', function (req, res) {
  var config = require('./config.json');
  if (config[req.params.id] !== undefined) {
    var data = require(`./${config[req.params.id]}/index.json`);
    res.status(200).send(data);
  } else {
    res.status(404).send({message: "User is not exist"});
  }
});

module.exports = router;
