
CREATE TABLE `Branch` (
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

CREATE TABLE `User` (
  `user_id` INT(11) not NULL AUTO_INCREMENT,
  `user_type` char(1) not NULL,
  `username` varchar(25) not NULL UNIQUE,
  `password` varchar(255) not NULL,
  `is_deleted` BIT(2) not NULL Default 0,
  PRIMARY KEY (`user_id`),
  Check (user_type in ('S','C'))
);

CREATE TABLE `Customer` (
  `customer_id` INT(11) not NULL,
  `full_name` varchar(100) not NULL,
  `name_with_init` varchar(100) not NULL,
  `dob` date not NULL,
  `created_date` date not NULL,
  `NIC` varchar(20),
  `gender` varchar(25),
  `house_no` varchar(25) not NULL,
  `street` varchar(25) not NULL,
  `city` varchar(25),
  `postal_code` int(8),
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
  `branch_id` int(5) not NULL,
  `gender` varchar(25),
  `house_no` varchar(25) not NULL,
  `street` varchar(25) not NULL,
  `city` varchar(25),
  `post_id` BIT(3) not NULL,
  PRIMARY KEY (`emp_id`),
  FOREIGN KEY (emp_id) REFERENCES User (user_id)
);

CREATE TABLE `Cheque` (
  `cheque_id` int(48) not NULL AUTO_INCREMENT,
  `amount` Numeric(10,2) not NULL,
  `acc_id` int(32) not NULL,
  `date` timestamp,
  PRIMARY KEY (`cheque_id`)
);

CREATE TABLE `Notification` (
    `notification_id` int(64) not NULL AUTO_INCREMENT,
    `date` timestamp,
    `user_id` INT(11) not NULL,
    `message` varchar(500) not NULL,
    PRIMARY KEY (`notification_id`),
    FOREIGN KEY (user_id) REFERENCES User (user_id)
)