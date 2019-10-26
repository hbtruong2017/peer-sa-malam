"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var mysql = require("mysql");
var port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var GetCustInfo_1 = require("./GetCustInfo");
var GetLoanInfo_1 = require("./GetLoanInfo");
var SetLoanInfo_1 = require("./SetLoanInfo");
var SetLoanerInLoan_1 = require("./SetLoanerInLoan");
app.use(function (req, res, next) {
    res.locals.connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "",
        connectionLimit: 5,
        database: "proj_444",
        multipleStatements: true
    });
    res.locals.connection.connect();
    next();
});
app.use('/getCustInfo', GetCustInfo_1.getCustInfo);
app.use('/getLoanInfo', GetLoanInfo_1.loanRouter);
app.use('/createLoan', SetLoanInfo_1.setLoanRouter);
app.use('/setLoan', SetLoanerInLoan_1.setLoanerInLoan);
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });