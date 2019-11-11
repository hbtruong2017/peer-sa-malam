"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express4 = require('express');
var router = express4.Router();
router.post('/', function (req, res) {
    var _a = req.body, borrowerAccount = _a.borrowerAccount, imgLink = _a.imgLink, loanCategory = _a.loanCategory, loanDescription = _a.loanDescription, amount = _a.amount, interestRate = _a.interestRate, duration = _a.duration, borrowerFirstName = _a.borrowerFirstName, borrowerLastName = _a.borrowerLastName, jobTitle = _a.jobTitle, companyName = _a.companyName, yearsInJob = _a.yearsInJob, phoneNumber = _a.phoneNumber, address = _a.address;
    var sql = "insert into loandetails"
        + "(borrowerAccount, imgLink,loanCategory, loanDescription, amount, interestRate, duration)"
        + "values "
        + ("(" + borrowerAccount + ", \"" + imgLink + "\", \"" + loanCategory + "\", \"" + loanDescription + "\", " + amount + ", " + interestRate + ", " + duration + ");")
        + "INSERT INTO customerInfo"
        + "(accountNumber, custFirstName, custLastName, jobTitle, companyName, yearsInJob, phoneNumber, Address) "
        + ("VALUES(" + borrowerAccount + ", \"" + borrowerFirstName + "\", \"" + borrowerLastName + "\", \"" + jobTitle + "\", \"" + companyName + "\", " + yearsInJob + ", " + phoneNumber + ", \"" + address + "\") ON DUPLICATE KEY UPDATE ")
        + ("custFirstName =\"" + borrowerFirstName + "\", custLastName = \"" + borrowerLastName + "\" , jobTitle = \"" + jobTitle + "\", companyName=\"" + jobTitle + "\", yearsInJob = " + yearsInJob + ", phoneNumber=" + phoneNumber + ", Address = \"" + address + "\";");
    res.locals.connection.query(sql, function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            //If there is error, we send the error in the error section with 500 status
        }
        else {
            console.log("Inserted into DB");
            res.send({ "status": 200 });
            //If there is no error, all is good and response is 200OK.
        }
    });
});
exports.setLoanRouter = router;
