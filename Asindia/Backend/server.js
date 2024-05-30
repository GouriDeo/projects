var express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config();
const port = process.env.PORT
const app = express();

const database = require('./config/config.database')
const userRoutes = require('./app/routes/user.routes')
const eventRoutes = require('./app/routes/event.routes')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/user',userRoutes)
app.use('/event',eventRoutes)

database.mongoose;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
}); 
