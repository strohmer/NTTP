var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Wenn du durch die Hölle gehst, geh weiter!');
});

module.exports = router;
