//varibles

// get the client
require('dotenv').config();
const mysql = require('mysql2');
const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
let hostname = '127.0.0.1';
let port = 8000;

app.use(cors());

app.use ('/Cameras', (req, res) => {

    let connection = mysql.createConnection({
         host: 'remotemysql.com',
         port: 3306,
         user: 'sN99bC7mfM',
         password: 'EcjOZ5pTnr',
         database: 'sN99bC7mfM',
     });

    connection.connect(function (err) {
         if (err) throw err;
         console.log("Connected!");
    });

        connection.connect(function (err) {
         if (err) throw err;
         connection.query("SELECT * FROM cameras", function (err, rows, fields) {
             if (err) throw err;
             const SA7SIII = rows;
             res.send(SA7SIII);
         });
     });
});

app.get('/', (req, res) => {
   res.send('homeAPI');
});

app.listen(8000);
console.log('Server listening on ' + "http://" + hostname + ':' + port);
