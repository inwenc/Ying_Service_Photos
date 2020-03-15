DROP DATABASE IF EXISTS photo_gallery;

CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE IF NOT EXISTS Photos (
  id INT(5) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  photo1_a VARCHAR(150),
  photo1_b VARCHAR(150),
  photo1_caption VARCHAR(150),
  photo2_a VARCHAR(150),
  photo2_b VARCHAR(150),
  photo2_caption VARCHAR(150),
  photo3_a VARCHAR(150),
  photo3_b VARCHAR(150),
  photo3_caption VARCHAR(150),
  photo4_a VARCHAR(150),
  photo4_b VARCHAR(150),
  photo4_caption VARCHAR(150),
  photo5_a VARCHAR(150),
  photo5_b VARCHAR(150),
  photo5_caption VARCHAR(150),
  photo6_a VARCHAR(150),
  photo6_b VARCHAR(150),
  photo6_caption VARCHAR(150),
  photo7_a VARCHAR(150),
  photo7_b VARCHAR(150),
  photo7_caption VARCHAR(150),
  photo8_a VARCHAR(150),
  photo8_b VARCHAR(150),
  photo8_caption VARCHAR(150),
  photo9_a VARCHAR(150),
  photo9_b VARCHAR(150),
  photo9_caption VARCHAR(150),
  photo10_a VARCHAR(150),
  photo10_b VARCHAR(150),
  photo10_caption VARCHAR(150),
  photo11_a VARCHAR(150),
  photo11_b VARCHAR(150),
  photo11_caption VARCHAR(150),
  photo12_a VARCHAR(150),
  photo12_b VARCHAR(150),
  photo12_caption VARCHAR(150),
  photo13_a VARCHAR(150),
  photo13_b VARCHAR(150),
  photo13_caption VARCHAR(150),
  photo14_a VARCHAR(150),
  photo14_b VARCHAR(150),
  photo14_caption VARCHAR(150),
  photo15_a VARCHAR(150),
  photo15_b VARCHAR(150),
  photo15_caption VARCHAR(150),
  photo16_a VARCHAR(150),
  photo16_b VARCHAR(150),
  photo16_caption VARCHAR(150),
  photo17_a VARCHAR(150),
  photo17_b VARCHAR(150),
  photo17_caption VARCHAR(150),
  photo18_a VARCHAR(150),
  photo18_b VARCHAR(150),
  photo18_caption VARCHAR(150),
  photo19_a VARCHAR(150),
  photo19_b VARCHAR(150),
  photo19_caption VARCHAR(150),
  photo20_a VARCHAR(150),
  photo20_b VARCHAR(150),
  photo20_caption VARCHAR(150),
  photo21_a VARCHAR(150),
  photo21_b VARCHAR(150),
  photo21_caption VARCHAR(150),
  photo22_a VARCHAR(150),
  photo22_b VARCHAR(150),
  photo22_caption VARCHAR(150),
  photo23_a VARCHAR(150),
  photo23_b VARCHAR(150),
  photo23_caption VARCHAR(150),
  photo24_a VARCHAR(150),
  photo24_b VARCHAR(150),
  photo24_caption VARCHAR(150),
  photo25_a VARCHAR(150),
  photo25_b VARCHAR(150),
  photo25_caption VARCHAR(150),
  photo26_a VARCHAR(150),
  photo26_b VARCHAR(150),
  photo26_caption VARCHAR(150),
  photo27_a VARCHAR(150),
  photo27_b VARCHAR(150),
  photo27_caption VARCHAR(150),
  photo28_a VARCHAR(150),
  photo28_b VARCHAR(150),
  photo28_caption VARCHAR(150),
  photo29_a VARCHAR(150),
  photo29_b VARCHAR(150),
  photo29_caption VARCHAR(150),
  photo30_a VARCHAR(150),
  photo30_b VARCHAR(150),
  photo30_caption VARCHAR(150),
  createdAt DATE,
  updatedAt DATE
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/