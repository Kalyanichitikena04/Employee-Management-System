const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_db"
});

connection.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Database Connected");
    }
});

module.exports = connection;