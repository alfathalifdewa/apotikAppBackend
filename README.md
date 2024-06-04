# Aplikasi Backend Apotik
Aplikasi Backend Menggunakan Express JS Untuk Membuat RESTAPI apotikApps.

## Installation
```sh
npm install
npm install -g nodemon
npm start
```
> Copy isi file `.env.example`Lalu buat dan paste isi nya ke dalam file `.env` 

## Routes

| ACTION | API | METHOD | AUTH |
| ------ | ------ | ------ | ------ |
| LOGIN | localhost:5000/users/login | POST | NO |
| REGISTER | localhost:5000/users/register | POST | NO |
| GET USER LOGIN | localhost:5000/users | GET | USER/ADMIN/SUPERADMIN |
| GET PRODUCTS | localhost:5000/products | GET | USER/ADMIN/SUPERADMIN |
| GET PRODUCTS ID | localhost:5000/products/:productName | GET | USER/ADMIN/SUPERADMIN |
| SAVE PRODUCT | localhost:5000/products | POST | ADMIN/SUPERADMIN |
| UPDATE PRODUCT | localhost:5000/products/:id | PUT | ADMIN/SUPERADMIN |
| DELETE PRODUCT | localhost:5000/products/:id | DELETE | ADMIN/SUPERADMIN |

