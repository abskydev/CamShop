//varibles

// get the client
const mysql = require('mysql2');
const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const hostname = "127.0.0.1";
const port = 8000;

app.use(cors());
app.use ('/Cameras', (req, res) => {

    let connection = mysql.createConnection({
         host: 'localhost',
         user: 'root',
         database: 'camshop'
     });

    connection.connect(function (err) {
         if (err) throw err;
         console.log("Connected!");
    });

        connection.connect(function (err) {
         if (err) throw err;
         connection.query("SELECT * FROM cameras LIMIT 0,1", function (err, rows, fields) {
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


   function registerUser() {
        let Acc = document.getElementById('rulesAcc');
        let password = document.getElementById('password--register').value;
        let passwordVerify = document.getElementById('passwordReapete--register').value;
        let mail = document.getElementById('email--register').value;
        let Name = document.getElementById('Name--register').value;
        let nick = document.getElementById('Nick--register').value;

        if (mail == "" && Name == "" && nick == "" && password == "" && passwordVerify == "") {
            alert('uzupełnij pola!')
        } else {
            if (mail == "") {
                alert('uzupełnij email');
            } else {
                if (mail.length <= 6) {
                    alert('za krótki adres email');
                } else {
                    if (Name == "") {
                        alert('uzupełnij imie i nazwisko')
                    } else {
                        if (Name.length <= 5) {
                            alert('za krótkie imie i nazwisko')
                        } else {
                            if (nick == "") {
                                alert('uzupełnij pole nick')
                            } else {
                                if (nick == "") {
                                    alert('uzupełnij pole nick')
                                } else {
                                    if (nick.length <= 2) {
                                        alert('za krótki nick')
                                    } else {
                                        if (password == "" || passwordVerify == "") {
                                            if (password == "") {
                                                alert('uzupełnij pole hasła')
                                            } else {
                                                if (passwordVerify == "") {
                                                    alert('uzupełnij pole weryfikacji hasła')
                                                } else {
                                                    if (password == "" && passwordVerify == "") {
                                                        alert('uzupełnij pole hasła i jego weryfikacji!')
                                                    } else {
                                                        if (passwordVerify != password) {
                                                            alert('hasła się nie zgadzają')
                                                        } else {
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (Acc.checked == true) {
                                onload(UA);
                            } else {
                                alert('Rules Accept is required to create account')
                            }
                        }
                    }
                }
            }
        }
    }