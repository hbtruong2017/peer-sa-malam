var express2 = require('express');
var router = express2.Router();

router.get('/', function (req, res) {
    res.send('Hello World');
  })

export const getCustInfo = router