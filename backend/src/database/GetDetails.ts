/**
 * Testing File
 */

var dbconnection = require('./ConnectionHandler');
// var dbconnection = require('../dbcon');/

var sql = "select loandetails.id, customerinfo.custFirstName, loandetails.borrowerId, loanerId, imgLink, amount, interestRate,duration from loandetails, customerInfo where loandetails.borrowerId = customerInfo.custId";

dbconnection.query(sql, function (error, results) {
    //Do your stuff
    console.log(results);
});