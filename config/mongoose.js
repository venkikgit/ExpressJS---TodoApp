// require the library
const mongoose = require('mongoose');
//connect to the database
mongoose.connect('mongodb://localhost/todolist_app_db'); //Choose it by typing here
// mongoose.connect('mongodb+srv://venki47:QI4ZnYrNayDHpOun@cluster0.artl5tx.mongodb.net/?retryWrites=true&w=majority');
// acquire the connection
const db = mongoose.connection;
// error
db.on('error', console.error.bind(console,'error connecting to db'));
// up and db is running
db.once('open', function(){
    console.log("Successfully connected to database");
});
