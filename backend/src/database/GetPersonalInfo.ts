
/**
 * Returns Personal Information given user's id
 * @param {BigInteger} userId 
 */
 const getPersonalInfo = (userId) => {
    var dbconnection = require('./ConnectionHandler');

    const sql = `select custId, custName, custRating, jobTitle, companyName, yearsInJob, accountNumber, phoneNumber, address from customerinfo where custId = ${userId}`
    
    dbconnection.query(sql, function (error, results) {
        //Do your stuff
        console.log(results);
        return results
    });
    
}

// Test module

// getPersonalInfo(7);

