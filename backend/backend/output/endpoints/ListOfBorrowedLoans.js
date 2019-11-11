"use strict";
// select * from loanDetails where loanStatus = "" and borrowerAccount =  ""; -- For seeing what you borrowed
Object.defineProperty(exports, "__esModule", { value: true });
var express8 = require('express');
var router = express8.Router();
router.get('/:loanStatus-:borrowerAccount', function (req, res) {
    var _a = req.params, loanStatus = _a.loanStatus, borrowerAccount = _a.borrowerAccount;
    var sql = "select * from loanDetails where loanStatus = \"" + loanStatus + "\" and borrowerAccount =  \"" + borrowerAccount + "\";";
    res.locals.connection.query(sql, function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            //If there is error, we send the error in the error section with 500 status
        }
        else {
            console.log("Fetched List of Loan Details By Borrower");
            res.send({ "borrowedLoans": results });
            //If there is no error, all is good and response is 200OK.
        }
    });
});
exports.listBorrowerdLoans = router;
