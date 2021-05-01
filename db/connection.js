const mysql = require('mysql2');
const settings = require('../appsettings.json');

// Connect to the database
const db = mysql.createConnection(
    {
        host: settings.dbHost,
        // Your MySQL username
        user: settings.dbUser,
        // Your MySQL password
        password: settings.dbPassword,
        database: 'election'
    },
);

module.exports = db;