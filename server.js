import express from "express";
import ViteExpress from "vite-express";
import mysql from "mysql2";
import session from "express-session";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "diplom",
    password: ""
});

const app = express();

app.use(express.json()); 

app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err);
        return;
    }
    console.log('Подключено к базе данных');
});
  
app.get('/number', (req, res) => {
    connection.query('SELECT * FROM `user`', (error, results) => {
        if (error) {
            console.error('Ошибка выполнения запроса:', error);
            res.status(500).json({ error: 'Произошла ошибка при выполнении запроса' });
        } else {
            res.json(results);
        }
    });
});

app.get('/logpass', (req, res) => {
    const { login, password } = req.query;
    const query = 'SELECT id, login, password FROM user WHERE login = ? AND password = ?';
    connection.query(query, [login, password], (error, results) => {
        if (error) {
            console.error('Ошибка выполнения запроса:', error);
            res.status(500).json({ error: 'Произошла ошибка при выполнении запроса' });
        } else {
            if (results.length > 0) {
                const user = results[0];
                req.session.user = { login: user.login, id: user.id };
                res.status(200).json({ success: true, user });
            } else {
                res.status(401).json({ success: false, message: 'Неправильный логин или пароль' });
            }
        }
    });
});

app.post('/user', (req, res) => {
    const userData = req.body; 
    const { name, password, email, login, tel, date, surname } = userData;
    const query = `INSERT INTO user (name, password, email, login, tel, data, surname) 
                    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    connection.query(query, [name, password, email, login, tel, date, surname], (error) => {
        if (error) {
            console.error('Ошибка выполнения запроса:', error);
            res.status(500).json({ error: 'Произошла ошибка при выполнении запроса' });
        } else {
            console.log('Данные успешно добавлены в базу данных');
            res.status(200).json({ message: 'Данные успешно добавлены в базу данных' });
        }
    });
});

ViteExpress.listen(app, 3000, () => console.log("localhost:3000"));
