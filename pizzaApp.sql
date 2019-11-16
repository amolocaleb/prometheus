-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 15, 2019 at 09:13 AM
-- Server version: 5.7.27-0ubuntu0.19.04.1
-- PHP Version: 7.2.24-0ubuntu0.19.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pizzaApp`
--

--
-- Dumping data for table `drinks`
--

INSERT INTO `drinks` (`id`, `name`, `price`) VALUES
(1, 'Coke', '150.00'),
(2, 'Diet Coke', '150.00'),
(3, 'Sparkling Water', '150.00'),
(4, 'Pepsi Cola', '150.00'),
(5, 'Sprite', '150.00'),
(6, 'Fanta Orange', '150.00'),
(7, 'Regular Water', '100.00');

--
-- Dumping data for table `pizzas`
--

INSERT INTO `pizzas` (`id`, `name`, `pizza_url`, `description`) VALUES
(1, 'Hawaiian', '/img/hawaiian.jpg', NULL),
(2, 'Boerewors', '/img/boerewors.png', NULL),
(3, 'Peri Peri Chicken', '/img/periperichicken.jpg', NULL),
(4, 'Chicken BBQ', '/img/chickenbbq2.jpg', NULL),
(5, 'Chicken Mushroom', '/img/chickenmushroom.jpg', NULL),
(6, 'Veg Tikka', '/img/vegtikka.jpg', NULL),
(7, 'Chicken Tikka', '/img/chickentikka2.jpg', NULL),
(8, 'Regina', '/img/regina.jpg', NULL),
(9, 'Margherita', '/img/margherita.jpg', NULL),
(10, 'BBQ Steak', '/img/bbqsteak.jpg', NULL);

--
-- Dumping data for table `pizza_sizes`
--

INSERT INTO `pizza_sizes` (`id`, `size`, `pizza_id`, `price`) VALUES
(1, 'S', 1, '500.00'),
(2, 'M', 1, '650.00'),
(3, 'L', 1, '900.00'),
(4, 'S', 2, '500.00'),
(5, 'M', 2, '650.00'),
(6, 'L', 2, '800.00'),
(7, 'S', 3, '550.00'),
(8, 'M', 3, '700.00'),
(9, 'L', 3, '950.00'),
(10, 'S', 4, '550.00'),
(11, 'M', 4, '700.00'),
(12, 'L', 4, '950.00'),
(13, 'S', 5, '550.00'),
(14, 'M', 5, '700.00'),
(15, 'L', 5, '950.00'),
(16, 'S', 6, '500.00'),
(17, 'M', 6, '650.00'),
(18, 'L', 6, '800.00'),
(19, 'S', 7, '550.00'),
(20, 'M', 7, '700.00'),
(21, 'L', 7, '950.00'),
(22, 'S', 8, '500.00'),
(23, 'M', 8, '600.00'),
(24, 'L', 8, '750.00'),
(25, 'S', 9, '500.00'),
(26, 'M', 9, '650.00'),
(27, 'L', 9, '800.00'),
(28, 'S', 10, '550.00'),
(29, 'M', 10, '750.00'),
(30, 'L', 10, '950.00');

--
-- Dumping data for table `toppings`
--

INSERT INTO `toppings` (`id`, `name`, `price`) VALUES
(1, 'Mozzarella', '150.00'),
(2, 'Parmesan', '150.00'),
(3, 'Jalapenos', '150.00'),
(4, 'Cheddar', '150.00'),
(5, 'Feta', '150.00'),
(6, 'Mexican Mince', '200.00'),
(7, 'BBQ Chicken', '200.00'),
(8, 'Pepperoni', '200.00'),
(9, 'Ham', '200.00'),
(10, 'Red Pepper', '150.00'),
(11, 'Green Pepper', '150.00'),
(12, 'Macon', '200.00'),
(13, 'Boerewors', '200.00'),
(14, 'BBQ Steak', '200.00'),
(15, 'Pineapple', '150.00'),
(16, 'Onion', '150.00'),
(17, 'Mushroom', '150.00'),
(18, 'Tomatoes', '150.00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
