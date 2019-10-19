create schema proj_444;

create table loanDetails (
	id INT primary key auto_increment,
    borrowerId int not null,
    loanerId int,
    imgLink varchar(255) not null,
    amount float not null,
    interestRate float not null,
    duration int not null
);

create table customerInfo (
	custId int primary key auto_increment,
    custName varchar(255) not null,
    custRating float not null DEFAULT 0,
    jobTitle varchar(255) not null,
    companyName varchar(255),
    yearsInJob int,
    accountNumber int not null unique,
    phoneNumber int not null,
    address varchar(255) not null
);

insert into loandetails
	(borrowerId, imgLink,amount, interestRate, duration)
values 
	(1,"www.google.com",200.00,5.1,32),
    (4,"www.google.com",300.00,5.1,30),
    (7,"www.google.com",600.00,5.1,2),
    (10,"www.google.com",7200.00,5.1,5),
    (4,"www.google.com",20.00,5.1,3);
    
insert into customerInfo
	(custName, jobTitle, companyName, yearsInJob, accountNumber, phoneNumber, Address)
values
	("Jonah","Boss Baby", "",99, 456345,7485969,"21st Jump Street"),
    ("Reynold","Boss", "",9, 45345,7485349,"22nd Sit Street"),
    ("Jonah","Boss Baby", "",0, 456745,7485946,"40th dead Street"),
    ("Jonah","Boss Baby", "",null, 426345,7235969,"666 Live Street"),
    ("Jonah","Boss Baby", "",null, 459345,3847598,"777 Purge Street");
    

select loandetails.id, customerinfo.custName, loandetails.borrowerId, loanerId, imgLink, amount, interestRate,duration from loandetails, customerInfo where loandetails.borrowerId = customerInfo.custId;