var express = require('express')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
dotenv.config();
const port = process.env.PORT
const app = express();
const database = require('./config/database.config')

var note = require('./app/routes/note.routes')
var user = require('./app/routes/user.routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/note',note)
app.use('/user',user)

database.mongoose;
app.listen(port, () => {
    console.log("Server is listening on port "+port);
});