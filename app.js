
const bodyParser = require("body-parser");
const express = require('express');

const app = express();
//* Database connection
require("./utils/db");

//* Body Parser
app.use(bodyParser.urlencoded({extended:false}));

//*Routes
app.use("/" , require("./routes/homeRouters"));



app.listen(4200 , () =>{console.log("Server is Running on Port 4200")});