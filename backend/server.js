/******************************************************************************
 *  Execution        :   1. default node         cmd> node server.js 
 *  Purpose          :Build the connection to the database 
 *
 *  @file            : server.js
 *  @overview        : Define connection to the database 
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 30/03/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Routes/routes');
var chatControl=require('./controllers/chat.controller')


// create express app
const app = express();
require('dotenv').config()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use('/', router);
app.use(express.static('./frontEnd'));


// Configuring the database
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');
const server=require('http').createServer(app)
const io=require('socket.io').listen(server)
 
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to chatApp" });
});
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

connections=[];
io.sockets.on('connection', function (socket) {
    connections.push(socket)
    console.log('connected : %s sockect connected', connections.length);
    //incoming message form the client side
    socket.on('newMsg', function (req) {
        console.log("client sent msg :", req);
        chatControl.chatController(req,(err,data)=>{
            if(err)
            {
                console.log("err on server.js when receive message save via controller",err);
            }
            else{
                console.log('message save result on server.js',data);
                //sending responce message to the client 
                socket.emit('emitMessage',data);
                
            }
        })
    })
})

