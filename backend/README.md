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