
var express3 = require('express');
var router = express3.Router();

router.get('/:borrowerId', function (req, res) {
    const borrowerId = req.params.borrowerId;

    const sql = `select imgLink, amount, interestRate, duration, custName as borrowerName , custRating, jobTitle, companyName, yearsInJob from customerinfo CI, loandetails LD where ${borrowerId} = CI.custId;`;

    res.locals.connection.query(sql, function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send({"LoanInfo": results[0]});
            //If there is no error, all is good and response is 200OK.
        }
    });
    
         
});
    
 
export const loanRouter = router

