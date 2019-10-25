
var express3 = require('express');
var router = express3.Router();

router.post('/', function (req, res) {

    const {borrowerId, imgLink, loanCategory, loanDescription, amount, interestRate, duration} = req.body

    const sql = `insert into loandetails` 
                + `(borrowerId, imgLink,loanCategory, loanDescription, amount, interestRate, duration)`
                + `values `
                +`(${borrowerId}, "${imgLink}", "${loanCategory}", "${loanDescription}", ${amount}, ${interestRate}, ${duration})`;

    res.locals.connection.query(sql, function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            console.log("Inserted into DB");
            res.send({"status": 200});
            //If there is no error, all is good and response is 200OK.
        }
    });
    
         
});
    
 
export const setLoanRouter = router

