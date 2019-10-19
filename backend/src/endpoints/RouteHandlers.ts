const express = require('express')
const app = express()
const port = 3000

import {getCustInfo} from './GetCustInfo'
import {loanRouter} from './GetLoanInfo'



app.use('/getCustInfo', getCustInfo);
app.use('/getLoanInfo', loanRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))