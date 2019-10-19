"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express2 = require('express');
var router = express2.Router();
router.get('/', function (req, res) {
    res.send('Hello World');
});
exports.getCustInfo = router;
