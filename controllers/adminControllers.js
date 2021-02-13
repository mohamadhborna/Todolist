const Todo = require("../models/todoModel");


exports.addTodo = async(req , res) =>{
    if (!req.body.todo) return res.redirect("/");
    try{
        await Todo.create({text:req.body.todo});
        res.redirect("/")
    }
    catch(err){
        console.log(err);
    }
    
}
exports.completeTodo = async(req , res) =>{
    try{
        const todo = await Todo.findById(req.params.id);
        todo.isCompleted = true
        await todo.save();
        res.redirect("/");
    }
    catch(err){
        console.log(err)
    }
}

exports.deleteTodo = async(req , res) =>{
    try{
        let result = await Todo.findByIdAndRemove(req.params.id);
        console.log(result);
        res.redirect("/");
    }
    catch(err){
        console.log(err);
    }
}