const getAllTasks = (req,res)=>{
   res.send("Get All Tasks")
}

const getSingleTask =(req,res)=>{
   const {id:taskID} = req.params;
   res.send(`getSingleTask ${taskID}`)
}

const createTask = (req,res)=>{
   const task = req.body;
   res.status(20).json({task})
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