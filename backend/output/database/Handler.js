const mysql = require('mysql')

// First you need to create a connection to the db
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proj_444'
  });
  
  con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');

    var sql = "select loandetails.id, customerinfo.custName, loandetails.borrowerId, loanerId, imgLink, amount, interestRate,duration from loandetails, customerInfo where loandetails.borrowerId = customerInfo.custId;";

    con.query(sql, (err,rows) => {
        if(err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
      });

    con.end(function(err) {
    // The connection is terminated now
    });
  });

