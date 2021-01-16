

drop database Virtual_Cheque_System;
create database Virtual_Cheque_System;
use Virtual_Cheque_System;


/*CREATE TABLE `Branch` (
  `branch_id` int(5) not NULL AUTO_INCREMENT,
  `branch_name` varchar(100),
  `street` varchar(25) not NULL,
  `city` varchar(25) not NULL,
  `postal_code` int(8) not NULL,
  `grade` int(3),
  `contact_No` int(10) unsigned,
  `is_deleted` BIT(2) not NULL Default 0, 
  PRIMARY KEY (`branch_id`)
);
*/

CREATE TABLE `User` (
  `user_id` INT(11) not NULL AUTO_INCREMENT,
  `user_type` char(10) not NULL,
  `username` varchar(25) not NULL UNIQUE,
  `password` varchar(255) not NULL,
  `status` varchar(10) not NULL,

  PRIMARY KEY (`user_id`),
  Check (user_type in ('STAFF','CUSTOMER')),
  Check (status in ('PENDING','APPROVED','DELETED','REJECTED'))
);

CREATE TABLE `Customer` (
  `customer_id` INT(11) not NULL,
  `account_no` int(10) UNIQUE,
  `full_name` varchar(100) not NULL,
  `name_with_init` varchar(100) not NULL,
  `dob` date not NULL,
  `created_date` date not NULL,
  `NIC` varchar(20) UNIQUE not NULL,
  `gender` varchar(25) not NULL,
  `house_no` varchar(25) not NULL,
  `street` varchar(25) not NULL,
  `city` varchar(25),
  `postal_code` int(8),
  `pin` int(6) not NULL,  
  `contact_primary` int(10),
  `contact_secondary` int(10),
  PRIMARY KEY (`customer_id`),
  FOREIGN KEY (customer_id) REFERENCES User (user_id)
);

CREATE TABLE `Employee` (
  `emp_id` INT(11) not NULL,  
  `full_name` varchar(100) not NULL,
  `name_with_init` varchar(100) not NULL,
  `dob` Date not NULL,
  `created_date` date not NULL,
  `postal_code` int(8) not NULL,
  `contact_No` int(10),
  `NIC` varchar(20) not NULL UNIQUE,
  `gender` varchar(25) not NULL,
  `house_no` varchar(25) not NULL,
  `street` varchar(25) not NULL,
  `city` varchar(25),
  `post_id` BIT(3) not NULL,

  PRIMARY KEY (`emp_id`),
  FOREIGN KEY (emp_id) REFERENCES User (user_id)
);

CREATE TABLE `Cheque` (
  `cheque_id` int(48) not NULL AUTO_INCREMENT,  
  `sender_id` INT(11) not NULL,
  `receiver_id` INT(11) not NULL,
  `evaluator_id` INT(11) not NULL,
  `amount` Numeric(10,2) not NULL,
  `status` varchar(10) not NULL,
  `date` timestamp,
  PRIMARY KEY (`cheque_id`),
  FOREIGN KEY (sender_id) REFERENCES Customer (customer_id),
  FOREIGN KEY (receiver_id) REFERENCES Customer (customer_id),
  FOREIGN KEY (evaluator_id) REFERENCES Employee (emp_id),
  Check (status in ('PENDING','REFUNDED','EVALUATING','PASSED','REJECTED'))
);

CREATE TABLE `Notification` (
    `notification_id` int(64) not NULL AUTO_INCREMENT,
    `date` timestamp,
    `to_id` INT(11) not NULL,
    `title` varchar(500) not NULL,
    `message` varchar(500) not NULL,
    `status` varchar(10) not NULL,
    PRIMARY KEY (`notification_id`),
    Check (status in ('READ','NOTREAD')),
    FOREIGN KEY (to_id) REFERENCES User (user_id)
);


insert into User values (1,'STAFF','abcsilva','24wef3wg2ew3erg4d12','PENDING');
insert into User values (2,'STAFF','kamal','24wef3wg2ew3erg4d12','APPROVED');
insert into User values (3,'STAFF','saman','24wef3wg2ew3erg4d12','DELETED');
insert into User values (4,'STAFF','vimal','24wef3wg2ew3erg4d12','REJECTED');

insert into User values (5,'CUSTOMER','ajith','24wef3wg2ew3erg4d12','PENDING');
insert into User values (6,'CUSTOMER','perera','24wef3wg2ew3erg4d12','PENDING');


select * from User;

