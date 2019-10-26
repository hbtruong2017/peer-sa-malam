"use strict";
// select * from loanDetails where loanStatus = "" and loanerAccount =  ""; -- For seeing what you lent
Object.defineProperty(exports, "__esModule", { value: true });
var express7 = require('express');
var router = express7.Router();
router.get('/:loanStatus-:loanerAccount', function (req, res) {
    var _a = req.params, loanStatus = _a.loanStatus, loanerAccount = _a.loanerAccount;
    var sql = "select * from loanDetails where loanStatus = \"" + loanStatus + "\" and loanerAccount = \"" + loanerAccount + "\";";
    res.locals.connection.query(sql, function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            //If there is error, we send the error in the error section with 500 status
        }
        else {
            console.log("Updated Loaner Id");
            res.send({ "loanedLoans": results });
            //If there is no error, all is good and response is 200OK.
        }
    });
});
exports.listLoanedLoans = router;
