DROP DATABASE IF EXISTS proj_444;
create schema proj_444;

USE proj_444;

DROP TABLE IF EXISTS `loanDetails`;
DROP TABLE IF EXISTS `customerInfo`;

create table loanDetails (
	id INT primary key auto_increment,
    borrowerAccount int not null,
    loanerAccount int,
    imgLink varchar(255) not null,
    loanCategory varchar(255) not null,
    loanDescription varchar(255) not null,
    amount float not null,
    interestRate float not null,
    duration int not null
);

create table customerInfo (
    accountNumber int primary key,
    custFirstName varchar(255) not null,
    custLastName varchar(255) not null,
    custRating float not null DEFAULT 0,
    jobTitle varchar(255) not null,
    companyName varchar(255),
    yearsInJob int,
    phoneNumber int not null,
    address varchar(255) not null
);

insert into loandetails
	(borrowerAccount, imgLink,loanCategory, loanDescription, amount, interestRate, duration)
values 
	(777,"www.google.com","Vehicle","Buying a Ferrari",200.00,5.1,32),
    (666,"www.google.com","Animal","Buying a Dragon",300.00,5.1,30),
    (777,"www.google.com","Animal","Buying a Leviathon",600.00,5.1,2),
    (555,"www.google.com","Human","Buying a Maid",7200.00,5.1,5),
    (444,"www.google.com","Material","Buying  Gold",20.00,5.1,3);
    
insert into customerInfo
	(accountNumber, custFirstName, custLastName, jobTitle, companyName, yearsInJob, phoneNumber, Address)
values
	(777,"Jonah", "Hill", "Boss Baby", "",99,7485969,"21st Jump Street"),
    (666,"Reynold" , "Ryan","Boss", "",9,7485349,"22nd Sit Street"),
    (555,"Jonah","Hirola","Boss Baby", "",0,7485946,"40th dead Street"),
    (444,"Jonah","Brody","Boss Baby", "",null,7235969,"666 Live Street"),
    (333,"Jonah","Crinch", "Boss Baby", "",null, 459345,"777 Purge Street");
    

select customerInfo.accountNumber, loandetails.id, customerinfo.custFirstName, loandetails.borrowerAccount, loanerAccount, imgLink, amount, interestRate,duration from loanDetails inner join customerInfo on loanDetails.borrowerAccount = customerInfo.accountNumber where 444 = customerInfo.accountNumber;

INSERT INTO customerInfo (accountNumber, custFirstName, custLastName, jobTitle, companyName, yearsInJob, phoneNumber, Address) VALUES(444, "Jackson", "Replaced", "Replacer", "Reaplced", 7, 666666, "no Address") ON DUPLICATE KEY UPDATE    
custFirstName ="abc", custLastName = "def" , jobTitle = "ghi", companyName="asd", yearsInJob = 9, phoneNumber=66666, Address = "latvia";

select * from loanDetails;

UPDATE loanDetails 
SET 
    loanerAccount = 696969
WHERE
    id = 1 ;