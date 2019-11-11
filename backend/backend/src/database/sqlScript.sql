DROP DATABASE IF EXISTS proj_444;
create schema proj_444;

USE proj_444;

DROP TABLE IF EXISTS `loanDetails`;
DROP TABLE IF EXISTS `customerInfo`;

create table loanDetails (
	id INT primary key auto_increment,
    borrowerAccount int not null,
    loanerAccount int,
    loanStatus varchar(255) not null default "pending",
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
	(borrowerAccount, imgLink, loanerAccount, loanStatus, loanCategory, loanDescription, amount, interestRate, duration)
values 
	(111,"https://i.imgur.com/5288qYR.jpg", "222", "pending", "CAR LOAN\r\n","Second-hand Madza 3\r\n",23500.00,3.1,12),
    (333,"https://i.imgur.com/LznfHt7.jpg", "444", "pending", "STUDY LOAN\r\n","One semester of NUS 2019 tuition fees\r\n",4200.00,1.5,3),
    (777,"https://i.imgur.com/7G4amiH.jpg", "888", "pending", "SME LOAN\r\n","To purchase kitchen equipment for new cafe\r\n",35300.00,3.1,5),
    (112,"https://i.imgur.com/aKapdVp.jpg", "888", "pending", "STUDY LOAN\r\n","One semester of SMU 2019 tuition fees\r\n",5800.00,2.5,3),
    (999,"https://i.imgur.com/MszHnx8.jpg", "112", "pending", "HOME LOAN\r\n","One-room HDB flat\r\n",24000.00,2.9,3),
    (222,"https://i.imgur.com/KRMyUHn.jpg", "111", "pending", "HOME LOAN\r\n","Lawn Mower for garden\r\n",3500.00,3.1,12),
    (444,"https://i.imgur.com/qDMW3Gi.jpg", "333", "pending", "STUDY LOAN\r\n","Grand Piano for lessons\r\n",8200.00,1.5,12),
    (666,"https://i.imgur.com/FrjTjDU.jpg", "555", "pending", "CAR LOAN\r\n","BMW 3 Series\r\n",50000.00,5,4);

    
insert into customerInfo
	(accountNumber, custFirstName, custLastName, jobTitle, companyName, yearsInJob, phoneNumber, Address)
values
	(111,"Jonah", "Hill", "Actor", "",99,7485969,"21st Jump Street"),
    (222,"Reynold" , "Ryan","Gin Owner", "",9,7485349,"22nd Sit Street"),
    (333,"Jonah","Hirola","Baby Sitter", "",0,7485946,"40th dead Street"),
    (444,"Matt","Brody","Freelance Training", "",null,7235969,"666 Live Street"),
    (555,"Korah","Crinch", "Pastor", "",null, 459345,"777 Purge Street"),
    (666,"Tim","othy", "Market Analyst", "",null, 459345,"4554 Lat Street"),
    (777,"Lou","Rachess", "Software Developer", "",null, 459345,"534 Din Street"),
    (888,"Bang","Hai", "Software Developer", "",null, 459345,"8797 Rit Street"),
    (112,"Ritta","Skeeter", "Journalist", "",null, 459345,"8797 Rit Street"),
    (999,"Van","T", "Business Analyst", "",null, 459345,"2342 Krind Street");
    

-- select customerInfo.accountNumber, loandetails.id, customerinfo.custFirstName, loandetails.borrowerAccount, loanerAccount, imgLink, amount, interestRate,duration from loanDetails inner join customerInfo on loanDetails.borrowerAccount = customerInfo.accountNumber where 444 = customerInfo.accountNumber;

-- INSERT INTO customerInfo (accountNumber, custFirstName, custLastName, jobTitle, companyName, yearsInJob, phoneNumber, Address) VALUES(444, "Jackson", "Replaced", "Replacer", "Reaplced", 7, 666666, "no Address") ON DUPLICATE KEY UPDATE    
-- custFirstName ="abc", custLastName = "def" , jobTitle = "ghi", companyName="asd", yearsInJob = 9, phoneNumber=66666, Address = "latvia";

-- select * from loanDetails where loanStatus = ""; -- For seeing list of loans available for loaning
-- select * from loanDetails where loanStatus = "" and borrowerAccount =  ""; -- For seeing what you borrowed
-- select * from loanDetails where loanStatus = "" and loanerAccount =  ""; -- For seeing what you lent
