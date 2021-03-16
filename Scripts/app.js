let userInfo = []

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//varibles

// get the client
require('dotenv').config();
const mysql = require('mysql2');
const http = require("http");
const path = require('path');

const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const localStorage = require('localstorage')

const app = express();
let hostname = '127.0.0.1';
let port = 6969;

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
    let userStatus = "registered";
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

app.get('/blog', (req, res) => {
    if (userInfo.length > 0) {
        res.render('blog.ejs')
    }else{
        res.render('pleaseLogin.ejs')
    }
})

app.get('/store', (req, res) => {
    res.render('store.ejs')
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

                 let id = "'" + Date.now().toString() + "'";
                 let name = "'" + req.body.name + "'";
                 let surname = "'" + req.body.Surname + "'";
                 let nick = "'" + req.body.Nick + "'";
                 let email = "'" + req.body.email + "'";
                 let pWord = "'" + hashedPassword + "'";

                 let sql = 'INSERT INTO users (id, name, surname, nick, email, password) VALUES (' + id + ', ' + name + ', ' + surname + ', ' + nick + ', ' + email + ', ' + pWord + ')';
          connection.connect(function (err) {
              if (err) {
                  console.log(err)
              }
          })
          connection.query(sql, function (err, rows, fields) {
              if (err) {
                  console.log(err)
              }
          });

          res.redirect('/login')
     } catch {
         res.redirect('/err')
         app.get('/err', (req, res )=> {
             res.render('error.ejs', {
                 errorEN: 'Error with sending data to database - data administrator has notified',
                 errorPL: 'Błąd przy wysyłaniu danych do bazy danych - administrator danych został powiadomiony',
                 errCode: 'errDB'
             })
         })
     }
    }
})

app.post('/login', (req, res) => {
    let sqlTwo = 'SELECT password FROM users WHERE email = ' + "'" + req.body.email + "'";

        let connection = mysql.createConnection({
            host: 'remotemysql.com',
            port: 3306,
            user: 'sN99bC7mfM',
            password: 'EcjOZ5pTnr',
            database: 'sN99bC7mfM',
        });

        connection.connect(function (err) {
            if (err) throw err;
            console.log("Connected to db RESTapi-login " + Date.now());
        })

        connection.query(sqlTwo, function (err, rows, result) {
            if (err) throw err;

            bcrypt.compare(req.body.password, rows[0].password, function (err, result) {
                if (result === true) {
                    let sqlThree = 'SELECT * FROM users WHERE email = ' + "'" + req.body.email + "'"
                    connection.query(sqlThree, function (err, rows) {
                        if (err) throw err
                        userInfo.splice(0,100)
                        userInfo.push(rows[0].id)
                        userInfo.push({
                            name: rows[0].name,
                            surname: rows[0].surname,
                            nick: rows[0].nick,
                            email: rows[0].email
                        })
                        console.log(userInfo)
                    })
                    res.redirect('/')
                }else{
                    if (err) {
                        app.get('/err', (req, res )=> {
                            res.render('error.ejs', {
                                errorEN: 'Internal error with validation data and form. more --' + err,
                                errorPL: 'Wewnętrzny błąd przy walidacji danych i formularza więcej -- ' + err,
                                errCode: 'errInternal' + err
                            })
                        })
                        res.redirect('/err')
                    }else{
                        if (result === false) {
                            app.get('/err', (req, res )=> {
                                res.render('error.ejs', {
                                    errorEN: 'Error -- incorrect password',
                                    errorPL: 'Błąd -- niepoprawne hasło',
                                    errCode: 'errIncPword'
                                })
                            })
                            res.redirect('/err')
                        }
                    }
                }
            })
        })
})

app.get('/cart', (req, res) => {
    res.render('cart.ejs')
})

app.listen(6969);
console.log('Server listening on ' + "http://" + hostname + ':' + port);