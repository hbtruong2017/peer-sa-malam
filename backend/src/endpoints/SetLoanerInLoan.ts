
var express5 = require('express');
var router = express5.Router();

router.post('/', function (req, res) {

    const {loanerAccount, loanId, loanStatus} = req.body

    const sql = `UPDATE loanDetails `
                + `SET loanerAccount = ${loanerAccount}, loanStatus = "${loanStatus}" `
                + `WHERE id = ${loanId} ;`;

    res.locals.connection.query(sql, function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            console.log("Updated Loaner Id");
            res.send({"status": 200});
            //If there is no error, all is good and response is 200OK.
        }
    });
    
         
});
 
export const setLoanerInLoan = router

