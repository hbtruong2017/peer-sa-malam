// select * from loanDetails where loanStatus = "" and loanerAccount =  ""; -- For seeing what you lent

var express7 = require('express');
var router = express7.Router();

router.get('/:loanStatus-:loanerAccount', function (req, res) {

    const {loanStatus, loanerAccount} = req.params

    const sql = `select * from loanDetails where loanStatus = "${loanStatus}" and loanerAccount =  "${loanerAccount}";`;

    res.locals.connection.query(sql, function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            console.log("Updated Loaner Id");
            res.send({"Loaned Loans": results});
            //If there is no error, all is good and response is 200OK.
        }
    });
    
         
});
 
export const listLoanedLoans = router
