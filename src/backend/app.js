const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
const path = require('path');
app.use(express.static(path.join(__dirname,'./dist/noteapp')));
const authRoute = require('./routes/authentication');
const notesRoute = require('./routes/svaenotes');
app.use(cors());


// db connection
var dburl = "mongodb+srv://Note:1234@cluster0.mpmpx.mongodb.net/<Notebook>?retryWrites=true&w=majority"
mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(success => {
    console.log('Connected to database');
})
.catch(err => {
    console.log(`Errpr in connectig db ${err}`);
});


//body parser
app.use(express.json());
app.use('/student', authRoute);
app.use('/student', notesRoute);
app.use('/teacher', notesRoute);
const port = 8000;
// assignin port number to server
app.listen(process.env.PORT || port,()=>{
    console.log("server is listening on ",port);
    
})