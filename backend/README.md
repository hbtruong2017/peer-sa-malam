# How to Run

## Importing database
1. Run your wamp
2. Go to your mysql workbench
   1. Open the sql script and highlight everything
   2. Click the lightning without a cursor 
<hr>

## Running the API Backend
1. cd Backend
2. npm install
3. cd Backend/output/endpoints
4. node RouteHandlers.js


# GET services

## /getCustInfo/:customerId
customerId: integer

Output:
````
    {
        "customerInfo": [
            {
            "accountNumber": 444,
            "custFirstName": "Becky",
            "custLastName": "Dick",
            "custRating": 0,
            "jobTitle": "Troll",
            "companyName": "Troll",
            "yearsInJob": 99,
            "phoneNumber": 2147483647,
            "address": "Random Internet Address"
            }
        ]
    }
````

## /getLoanInfo/:borrowerId
borrowerId: integer

Output:
```
{
    "LoanInfo": [
        {
            "accountNumber": 444,
            "id": 5,
            "loanStatus": "pending",
            "custFirstName": "Jonah",
            "loanerAccount": null,
            "imgLink": "www.google.com",
            "amount": 20,
            "interestRate": 5.1,
            "duration": 3
        }
    ]
}
```
## /getAllLoan/:loanStatus
E.g. URL: localhost:3000/getAllLoan/pending

output:
```
{
    "AllLoans": [
        {
            "id": 1,
            "borrowerAccount": 777,
            "loanerAccount": null,
            "loanStatus": "pending",
            "imgLink": "www.google.com",
            "loanCategory": "Vehicle",
            "loanDescription": "Buying a Ferrari",
            "amount": 200,
            "interestRate": 5.1,
            "duration": 32
        }
    ]
}
```

## /getBorrowerLoans/:loanStatus-:borrowerId
E.g. Url : localhost:3000/getAllLoan/pending-444
```
{
    "borrowedLoans": [
        {
            "id": 5,
            "borrowerAccount": 444,
            "loanerAccount": null,
            "loanStatus": "pending",
            "imgLink": "www.google.com",
            "loanCategory": "Material",
            "loanDescription": "Buying  Gold",
            "amount": 20,
            "interestRate": 5.1,
            "duration": 3
        }
    ]
}
```

## /getLoanerLoans/:loanStatus-:loanerId
E.g. Url: localhost:3000/getLoanerLoans/pending-696969

output
```
{
    "Loaned Loans": [
        {
            "id": 1,
            "borrowerAccount": 777,
            "loanerAccount": 696969,
            "loanStatus": "pending",
            "imgLink": "www.google.com",
            "loanCategory": "Vehicle",
            "loanDescription": "Buying a Ferrari",
            "amount": 200,
            "interestRate": 5.1,
            "duration": 32
        }
    ]
}
```


# POST services

## /setLoan

Input:

```
{
	"loanerAccount": 24324,
	"loanId": 2,
    "loanStatus": "complete" #complete, pending, default
}
```

Output:

```
Success:
{
    "status": 200
}
```

## /createLoan

Input:
```
{
	"borrowerAccount":"444",
	"imgLink":"www.reddit.com",
	"loanCategory": "Electronics",
	"loanDescription": "A new Television!",
	"amount": 69,
	"interestRate":6.9,
	"duration":66,
	"borrowerFirstName":"Becky",
	"borrowerLastName":"Dick",
	"jobTitle":"Troll",
	"companyName":"Tencent",
	"yearsInJob":"99",
	"phoneNumber":"2834792374",
	"address":"Random Internet Address"
}
```

Output:

```
{
    "status": 200
}
```