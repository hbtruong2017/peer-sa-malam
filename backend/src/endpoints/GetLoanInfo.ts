var express3 = require('express');
var router = express3.Router();

router.get('/', function (req, res) {
    res.send('Hello This is the LoannnNnn');
  })

export const loanRouter = router