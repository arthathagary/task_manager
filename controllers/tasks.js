const Task = require('../models/Task')

const getAllTasks = async (req,res)=>{
   try {
      const tasks = await Task.find({})
      res.status(200).json({tasks});
   } catch (error) {
      res.status(404).json({error})
   }
   
}

const getSingleTask = async (req,res)=>{
   try {
      const {id:taskID} = req.params;
      const task = await Task.findOne({_id:taskID})
      res.status(200).json({task});
   } catch (error) {
      res.status(404).json({error})
   }
   
}

const createTask = async (req,res)=>{
   try {
      const task = await Task.create(req.body)
      res.status(200).json({task})
   } catch (error) {
      res.status(404).json({error});
   }
   
}

const deleteTask = async (req,res)=>{
   try {
      const {id:taskID} = req.params;
      const task = await Task.findOneAndDelete({_id:taskID})
      res.status(200).json({task})
   } catch (error) {
      res.status(404).json({error});
   }
   
}

const updateTask = async (req,res)=>{
   try {
      const {id:taskID} = req.params;
      const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true});
      res.status(200).json({task})
   } catch (error) {
      res.status(404).json({error})
   }
   
}

module.exports={
   getAllTasks,
   getSingleTask,
   createTask,
   updateTask,
   deleteTask
}