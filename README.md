# Leaderboard-React-Flask
This is a leaderboard that displays a student's marks and percentage
with search and sort functionality

## Setting up the app

### Database - MySQL

make a user 'root' and give a password 'password' change the value of ```app.config['MYSQL_PASSWORD'] = 'root'```
in **api/app.py** accordingly.

**SQL queries for making database and creating a table:**
- CREATE DATABASE almabetter;
- USE almabetter;
- CREATE TABLE MyUsers ( rollno int unsigned not null, name varchar(50) not null ,
  pmarks smallint unsigned not null , cmarks smallint unsigned not null , mmarks smallint unsigned not null , 
  total smallint unsigned not null , percent FLOAT );


### Backend - Flask
**Libraries needed:**
- pip install flask
- pip install flask_mysqldb
- pip install flask_cors
- pip install json

### Frontend - ReactJS
Run:
- npm install


## Running the app

### Frontend
- npm start

### Backend
- python3 app.py