
var express3 = require('express');
var router = express3.Router();

router.get('/:borrowerId', function (req, res) {
    const borrowerId = req.params.borrowerId;

    const sql = `select customerInfo.custId, loandetails.id, customerinfo.custFirstName, loandetails.borrowerId, loanerId, imgLink, amount, interestRate,duration from loanDetails inner join customerInfo on loanDetails.borrowerId = customerInfo.custId where customerInfo.custId = ${borrowerId};`;

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

