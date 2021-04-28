# Paimonbot

Paimonbot merupakan sebuah chat bot untuk mengingatkan penggunanya mengenai deadline-deadline.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
Paimonbot diciptakan untuk memenuhi Tugas Besar 3 IF2211 Strategi Algoritma. Pengenalan message yang dikirim pengguna dilakukan menggunakan algoritma String Matching. Beberapa algortima yang digunakan adalah :

1. Knuth-Morris-Pratt (KMP)
2. Regular Expression (REGEX)
3. Dynamic Programming: Levenshtein Distance


## Screenshots
![Example 1](./img/img1.png)

![Example 1](./img/img2.png)

## Technologies
* React
* Tailwind CSS
* Socketio
* Express
* Postgresql

## Setup

1. Clone repository
```sh
git clone https://github.com/jasonstanleyyoman/Paimonbot-FE.git paimon-bot
cd paimon-bot
```

Untuk menjalankan secara lokal :
```sh
npm start
```

Untuk melakukan build production : 
```sh
npm build
```

Untuk menjalankannya, Anda perlu backend dari project ini. Untuk instalasi backend, silahkan ikuti tautan berikut [backend](https://github.com/ravielze/PaimonBot-Backend), Selain itu, perlu juga untuk membuat sebuah file .env untuk konfigurasi.
```sh
touch .env
```

Setelah itu copy semua yang ada di ```.env.example``` ke file ```.env``` yang baru. Ubah ```REACT_APP_SOCKET_URL``` ke url backend yang telah diinstal. Anda juga dapat mengubah nama bot dengan mengubah variabel ```REACT_APP_BOT_NAME```.

## Features
Berikut adalah fitur-fitur dari Paimonbot
* Login
* Register
* Penambahan Task Baru
* Melihat Daftar Task
* Menampilkan Deadline
* Memperbaharui Task Tertentu
* Menandakan Task Sudah Dikerjakan
* Menampilkan Opsi Help
* Analisa Typo dan Rekomendasi Kata
* Menampilkan Pesan Error


## Status
Project sudah selesai.

## Author
1. [Steven Nataniel](https://github.com/ravielze) 13519002
1. [Jason Stanley Yoman](https://github.com/jasonstanleyyoman) 13519019
1. [Kinantan Arya Bagaspati](https://github.com/kinantanbagaspati) 13519044