/******************************************************************************
 *  Execution        :   1. default node         cmd> node server.js 
 *  Purpose          :Build the connection to the database 
 *
 *  @file            : server.js
 *  @overview        : Define connection to the database 
 *  @author          : Shubhangi 
 *  @version         : 1.0
 *  @since           : 05/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
const http =require('http');
const express = require('express');
const SocketIO = require('socket.io');
const bodyParser = require('body-parser');
const router = require('./Routes/routes');
var chatControl=require('./controllers/chat.controller')


// create express app
const app = express();
const server=http.createServer(app);
var io=SocketIO(server);
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
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

io.on('connection', (socket)=> {
    console.log("new user connected");
    //incoming message form the client side
    socket.on('data', function (data) {
        console.log("client sent msg :",data);
        chatControl.chatController(data,(err,data)=>{
            if(err)
            {
                console.log("err on server.js when receive message save via controller",err);
            }
            else{
                console.log('message save result on server.js',data);
                //sending responce message to the client 
                socket.emit('data',data);
                
                
                
            }
        })
    })
})

