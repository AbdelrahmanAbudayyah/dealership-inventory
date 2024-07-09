const express = require("express")
const cors = require("cors")
var bodyParser = require('body-parser');
var app = express(express.json); 
app.use(cors());
app.use(bodyParser.json());

const webService1 = require('./webService1');
const webService2 = require('./webService2');

webService1(app);
webService2(app);

app.listen(2000, () => {
    console.log("Express server is running and listening");
}); 


