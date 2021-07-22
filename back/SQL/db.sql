DROP DATABASE IF EXISTS portfolio;
CREATE DATABASE portfolio;

USE portfolio;

DROP TABLE IF EXISTS  `admin`;

CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL UNIQUE,  
  `password` varchar(95) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET = utf8mb4;

INSERT INTO `admin` (`id`, `email`, `password`) VALUES (1, 2, "cedric@hotmail.fr", "123456");

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `admin_id` int NOT NULL,
  `login_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `success` BOOLEAN DEFAULT TRUE,
   PRIMARY KEY(`id`),
 CONSTRAINT FK_LoginAdmin FOREIGN KEY (admin_id)
    REFERENCES admin(id)
) ENGINE = InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET = utf8mb4;