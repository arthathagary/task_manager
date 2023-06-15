const Task = require('../models/Task')
const getAllTasks = (req,res)=>{
   res.send("Get All Tasks")
}

const getSingleTask =(req,res)=>{
   const {id:taskID} = req.params;
   res.send(`getSingleTask ${taskID}`)
}

const createTask = async (req,res)=>{
   try {
      const task = await Task.create(req.body)
      res.status(200).json({task})
   } catch (error) {
      console.log(error);
   }
   
}

const deleteTask = (req,res)=>{
   res.send('deleteTask')
}

const updateTask = (req,res)=>{
   res.send('updateTask')
}

module.exports={
   getAllTasks,
   getSingleTask,
   createTask,
   updateTask,
   deleteTask
}