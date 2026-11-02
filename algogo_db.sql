-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2026 at 05:26 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `algogo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank_soal`
--

CREATE TABLE `bank_soal` (
  `id_soal` int(10) UNSIGNED NOT NULL,
  `id_level` int(10) UNSIGNED NOT NULL,
  `teks_soal` text NOT NULL,
  `jenis_soal` varchar(30) NOT NULL,
  `pembahasan` text DEFAULT NULL,
  `urutan` int(10) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hasil_latihan`
--

CREATE TABLE `hasil_latihan` (
  `id_hasil` int(10) UNSIGNED NOT NULL,
  `id_pengguna` int(10) UNSIGNED NOT NULL,
  `id_level` int(10) UNSIGNED NOT NULL,
  `skor` decimal(5,2) NOT NULL DEFAULT 0.00,
  `jumlah_benar` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `jumlah_soal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `waktu_selesai` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `level_belajar`
--

CREATE TABLE `level_belajar` (
  `id_level` int(10) UNSIGNED NOT NULL,
  `nomor_level` int(10) UNSIGNED NOT NULL,
  `judul_materi` varchar(150) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `urutan_materi` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `materi`
--

CREATE TABLE `materi` (
  `id_materi` int(10) UNSIGNED NOT NULL,
  `id_level` int(10) UNSIGNED NOT NULL,
  `judul_materi` varchar(150) NOT NULL,
  `isi_materi` longtext DEFAULT NULL,
  `contoh_kode` longtext DEFAULT NULL,
  `urutan` int(10) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pilihan_jawaban`
--

CREATE TABLE `pilihan_jawaban` (
  `id_pilihan` int(10) UNSIGNED NOT NULL,
  `id_soal` int(10) UNSIGNED NOT NULL,
  `teks_pilihan` text NOT NULL,
  `urutan_pilihan` int(10) UNSIGNED NOT NULL,
  `is_benar` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `statistik`
--

CREATE TABLE `statistik` (
  `id_pengguna` int(10) UNSIGNED NOT NULL,
  `total_xp` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `streak_saat_ini` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `streak_terpanjang` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `aktivitas_terakhir` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_pengguna` int(10) UNSIGNED NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `tanggal_akun_dibuat` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank_soal`
--
ALTER TABLE `bank_soal`
  ADD PRIMARY KEY (`id_soal`),
  ADD KEY `id_level` (`id_level`);

--
-- Indexes for table `hasil_latihan`
--
ALTER TABLE `hasil_latihan`
  ADD PRIMARY KEY (`id_hasil`),
  ADD KEY `id_pengguna` (`id_pengguna`),
  ADD KEY `id_level` (`id_level`);

--
-- Indexes for table `level_belajar`
--
ALTER TABLE `level_belajar`
  ADD PRIMARY KEY (`id_level`),
  ADD UNIQUE KEY `nomor_level` (`nomor_level`);

--
-- Indexes for table `materi`
--
ALTER TABLE `materi`
  ADD PRIMARY KEY (`id_materi`),
  ADD UNIQUE KEY `id_level` (`id_level`,`urutan`);

--
-- Indexes for table `pilihan_jawaban`
--
ALTER TABLE `pilihan_jawaban`
  ADD PRIMARY KEY (`id_pilihan`),
  ADD UNIQUE KEY `id_soal` (`id_soal`,`urutan_pilihan`);

--
-- Indexes for table `statistik`
--
ALTER TABLE `statistik`
  ADD PRIMARY KEY (`id_pengguna`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_pengguna`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bank_soal`
--
ALTER TABLE `bank_soal`
  MODIFY `id_soal` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hasil_latihan`
--
ALTER TABLE `hasil_latihan`
  MODIFY `id_hasil` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `level_belajar`
--
ALTER TABLE `level_belajar`
  MODIFY `id_level` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `materi`
--
ALTER TABLE `materi`
  MODIFY `id_materi` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pilihan_jawaban`
--
ALTER TABLE `pilihan_jawaban`
  MODIFY `id_pilihan` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_pengguna` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bank_soal`
--
ALTER TABLE `bank_soal`
  ADD CONSTRAINT `bank_soal_ibfk_1` FOREIGN KEY (`id_level`) REFERENCES `level_belajar` (`id_level`) ON DELETE CASCADE;

--
-- Constraints for table `hasil_latihan`
--
ALTER TABLE `hasil_latihan`
  ADD CONSTRAINT `hasil_latihan_ibfk_1` FOREIGN KEY (`id_pengguna`) REFERENCES `users` (`id_pengguna`) ON DELETE CASCADE,
  ADD CONSTRAINT `hasil_latihan_ibfk_2` FOREIGN KEY (`id_level`) REFERENCES `level_belajar` (`id_level`) ON DELETE CASCADE;

--
-- Constraints for table `materi`
--
ALTER TABLE `materi`
  ADD CONSTRAINT `materi_ibfk_1` FOREIGN KEY (`id_level`) REFERENCES `level_belajar` (`id_level`) ON DELETE CASCADE;

--
-- Constraints for table `pilihan_jawaban`
--
ALTER TABLE `pilihan_jawaban`
  ADD CONSTRAINT `pilihan_jawaban_ibfk_1` FOREIGN KEY (`id_soal`) REFERENCES `bank_soal` (`id_soal`) ON DELETE CASCADE;

--
-- Constraints for table `statistik`
--
ALTER TABLE `statistik`
  ADD CONSTRAINT `statistik_ibfk_1` FOREIGN KEY (`id_pengguna`) REFERENCES `users` (`id_pengguna`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
