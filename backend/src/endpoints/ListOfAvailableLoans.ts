// ; -- For seeing list of loans available for loaning


var express6 = require('express');
var router = express6.Router();

router.get('/:loanStatus', function (req, res) {

    const {loanStatus} = req.params;

    const sql = `select * from loanDetails where loanStatus = "${loanStatus}";`;

    res.locals.connection.query(sql, function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            console.log("Updated Loaner Id");
            res.send({"AllLoans": results});
            //If there is no error, all is good and response is 200OK.
        }
    });
    
         
});
 
export const listAvailableLoans = router

