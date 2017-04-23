CREATE DATABASE IF NOT EXISTS `organizar`;

USE `organizar`;

CREATE TABLE IF NOT EXISTS `tasks` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `description` TEXT,
    `icon` TEXT  
);
