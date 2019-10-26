
var express3 = require('express');
var router = express3.Router();

router.get('/:borrowerId', function (req, res) {
    const borrowerAccount = req.params.borrowerId;

    const sql = `select customerInfo.accountNumber, loandetails.id, loanStatus,customerinfo.custFirstName, loanerAccount, imgLink, amount, interestRate,duration from loanDetails inner join customerInfo on loanDetails.borrowerAccount = customerInfo.accountNumber where customerInfo.accountNumber = ${borrowerAccount};`;

    res.locals.connection.query(sql, function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send({"LoanInfo": results});
            //If there is no error, all is good and response is 200OK.
        }
    });
    
         
});
    
 
export const loanRouter = router

