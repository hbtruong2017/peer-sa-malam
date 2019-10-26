"use strict";
// ; -- For seeing list of loans available for loaning
Object.defineProperty(exports, "__esModule", { value: true });
var express6 = require('express');
var router = express6.Router();
router.get('/:loanStatus', function (req, res) {
    var loanStatus = req.params.loanStatus;
    var sql = "select * from loanDetails where loanStatus = \"" + loanStatus + "\";";
    res.locals.connection.query(sql, function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            //If there is error, we send the errorin the error section with 500 status
        }
        else {
            console.log("Updated Loaner Id");
            res.send({ "allLoans": results });
            //If there is no error, all is good and response is 200OK.
        }
    });
});
exports.listAvailableLoans = router;
