// select * from loanDetails where loanStatus = "" and borrowerAccount =  ""; -- For seeing what you borrowed

var express9 = require('express');
var router = express9.Router();

router.get('/:id', function (req, res) {

    const {id} = req.params

    const sql = `select * from loanDetails where id =  "${id}";`;

    res.locals.connection.query(sql, function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            console.log("Fetched List of Loan Details By loanId");
            res.send({"loanInfo": results});
            //If there is no error, all is good and response is 200OK.
        }
    });
    
         
});
 
export const loanInfoByLoanId = router
