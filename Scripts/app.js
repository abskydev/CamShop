if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//varibles

// get the client
require('dotenv').config();
const mysql = require('mysql2');
const http = require("http");
const cors = require("cors");
const path = require('path');

const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const localStorage = require('node-localstorage')

const app = express();
let hostname = '127.0.0.1';
let port = 6996;

const users = []

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
             res.send(rows)
            });
         });
});

app.get('/Scss/main.css', (req, res) => {
    res.sendFile(path.join(__dirname+'/main.css'))
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname+'/products.js'))
})

app.get('/basescript.js', (req, res) => {
    res.sendFile(path.join(__dirname+'/basescript.js'))
})


app.get('/loginJS.js', (req, res) => {
    res.sendFile(path.join(__dirname+'/loginJS.js'))
})

app.get('/img/1-png.png', (req, res) => {
    res.sendFile(path.join(__dirname+'/1-png.png'))
})

app.get('/favicon.ico', (req, res) =>{
    res.sendFile(path.join(__dirname+'/favicon.ico'))
})



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

//
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/api', (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    if (req.body.password != req.body.passwordR) {
        app.get('/err', (req1, res) =>{
            res.render('error.ejs', {
                errorEN: 'Passwords not match!',
                errorPL: 'Hasła się nie zgadzają!',
                errCode: 'err0p0d1m'
            } )
        })
        res.redirect('/err')
    }else{
            try {

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

         const hashedPassword = await bcrypt.hash(req.body.password, 10)
          users.push({
              id: Date.now().toString(),
              name: req.body.name,
              Surname: req.body.Surname,
              Nick: req.body.Nick,
              email: req.body.email,
              password: hashedPassword
          })

                 let id = "'" + Date.now().toString() + "'";
                 let name = "'" + req.body.name + "'";
                 let surname = "'" + req.body.Surname + "'";
                 let nick = "'" + req.body.Nick + "'";
                 let email = "'" + req.body.email + "'";
                 let pWord = "'" + hashedPassword + "'";

                 let sql = 'INSERT INTO users (id, name, surname, nick, email, password) VALUES (' + id + ', ' + name + ', ' + surname + ', ' + nick + ', ' + email + ', ' + pWord + ')';
          connection.connect(function (err) {
               if (err) throw err;
               connection.query(sql, function (err, rows, fields) {
                    if (err) throw err;
               });
          });

          res.redirect('login')
     } catch {
         res.redirect('err')
         app.get('/err', (req, res )=> {
             res.render('error.ejs', {
                 errorEN: 'Error with sending data to database - data administrator has notified',
                 errorPL: 'Błąd przy wysyłaniu danych do bazy danych - administrator danych został powiadomiony',
                 errCode: 'errDB'
             } )
         })
     }
     console.log(users)
    }
})

app.post('/login', (req, res) => {
    let sqlTwo = 'SELECT password FROM users WHERE email = ' + req.body.email;
    console.log(sqlTwo)

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
        })

        connection.query(sqlTwo, function (err, rows, fields) {
            if (err) throw err;
            console.log(rows)
        })

        bcrypt.compare(req.body.password, rows.json(), function (err, result) {

        })
})

app.listen(6996);
console.log('Server listening on ' + "http://" + hostname + ':' + port);