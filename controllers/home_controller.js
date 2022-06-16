const Tasklist = require("../models/tasklist");
// To display information on page from schema 
module.exports.home = function(req, res){
    
    Tasklist.find({},function(err,tasklists){
        if(err){
            console.log('error in fetching from DB')
            return;
        }
        return res.render('home',{
            title : "Todo App",
            task_list: tasklists
        })
    })
}