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
	(111,"https://img2.carmax.com/img/vehicles/18076095/1/385.jpg", "222", "pending", "CAR LOAN\r\n","Second-hand Toyota Prius\r\n",23500.00,3.1,12),
    (333,"https://blog.nus.edu.sg/computingcareerfair/files/formidable/18/CoBrand-NUSEnterprise_V_COLS-2mtvfea.jpg", "444", "defaulted", "STUDY LOAN\r\n","One semester of NUS 2019 tuition fees\r\n",4200.00,1.5,3),
    (555,"https://www.venturehaven.com.sg/wp-content/uploads/2019/07/native-advertising-word-cloud-367x367.jpeg", "666", "complete", "SME LOAN\r\n","To fund advertising budget for new product\r\n",3000.00,1.5,2),
    (777,"https://5.imimg.com/data5/FG/PK/MY-30192896/restaurant-kitchen-equipment-500x500.jpg", "888", "complete", "SME Loan\r\n","To purchase kitchen equipment for new cafe\r\n",35300.00,3.1,5),
    (112,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8r1_phlsRCkbHTmoqdqnRUiiVMGxT0kcvtd-MDSBHzNuaHR5&s", "888", "active", "STUDY LOAN\r\n","One semester of SMU 2019 tuition fees\r\n",5800.00,2.5,3),
    (999,"https://images.financialexpress.com/2018/12/HOME_LOAN_.jpg", "112", "active", "Home Loan","HDB Loan",24000.00,2.9,3),
    (222,"https://5.imimg.com/data5/XQ/SE/MY-3997168/honda-petrol-lawn-mower-500x500.jpg", "111", "pending", "Equipment\r\n","Lawn Mower\r\n",3500.00,3.1,12),
    (444,"https://www.tomleemusic.ca/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/1/8/182410.jpg", "333", "defaulted", "Musical Instrument","Grand Piano\r\n",8200.00,1.5,12),
    (666,"https://m.media-amazon.com/images/I/31OL+zQ6O-L.jpg", "555", "complete", "Electronics","Fund new Airpods Pro\r\n",400.00,5,4),
    (888,"http://systemeye.net/wp-content/uploads/2017/08/Apple-13.3MacBook-Pro-500x500.jpg", "777", "complete", "Electronics","MacBook Pro 2019",5300.00,3.1,6),
    (222,"https://www.euniqyou.com/wp-content/uploads/2019/09/EUNIQYOU2152-copy-500x500.jpg", "112", "active", "Jewellery","Gold Earrings",800.00,7,1),
    (112,"https://5.imimg.com/data5/PM/TF/WR/SELLER-27480457/9-500x500.jpg", "999", "active", "Jewellery","Ancient Nepalese Necklace",2400.00,5,2);

    
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
