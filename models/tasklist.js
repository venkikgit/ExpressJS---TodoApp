const mongoose = require('mongoose');
// Creating the Schema for DB
const tasklistSchema = new mongoose.Schema({

    description: {

        type: String, 
        required : true
    },
    category: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    }

})

const Tasklist =mongoose.model('Tasklist', tasklistSchema);

module.exports = Tasklist;