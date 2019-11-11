var express2 = require('express');
var router = express2.Router();

router.get('/:customerId', function (req, res) {
    const customerId = req.params.customerId;

    const sql = `select * from customerInfo where customerInfo.accountNumber = ${customerId};`;

    res.locals.connection.query(sql, function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send({"customerInfo": results});
            //If there is no error, all is good and response is 200OK.
        }
    });
    
         
});
    

export const getCustInfo = router