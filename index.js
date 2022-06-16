// Setting up the server
const express = require('express');
const app = express();
const port = 8080;

// To connect to the DB
const db = require('./config/mongoose');
// Connecting the Schema
const Tasklist = require('./models/tasklist');

//Middle ware
app.use(express.urlencoded());// It is a middle ware
app.use(express.static('assets'));

//To connect to the routes
app.use('/', require('./routes'));
//Setting view engine
app.set('view engine','ejs');
app.set('views', './views');

//To create task
app.post('/create-task', function(req,res){

    Tasklist.create({
        description: req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,newTask){
        if(err){
            console.log("Error in adding the task");
            return;
        }
        console.log('*******',newTask);
        return res.redirect('back');
    })
})

// To Delete the task
app.get('/delete-task', function(req,res){
   
    var id = req.query;
    var count =Object.keys(id).length;
    for(let i=0; i<count ;i++){
        Tasklist.findByIdAndDelete(Object.keys(id)[i], function(err){
            if(err){ 
            console.log('error in deleteing an object from database');
         }
        });
    }
    return res.redirect('back');

});
// To print server running status
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server:${port}`);
    }
    console.log(`Yup! My Express Server is running on Port:${port}`);
});