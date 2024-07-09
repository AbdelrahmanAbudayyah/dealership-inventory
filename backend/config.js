const mysql = require("mysql");

const mysqlConfig = {
    host: "localhost", 
    port: 3306,
    user: "abood", 
    password: "Abdel@123",
    database: "abood",
    debug: false 
};

const dbConnection = mysql.createConnection(mysqlConfig);
dbConnection.connect(function(err) {
    if (err) {
        console.error('Opps. There was an error connecting to the database: ', err.stack);
        return;
    }
    console.log('Backend is now connected to: ' + dbConnection.config.database + '.');
});

module.exports = dbConnection;
