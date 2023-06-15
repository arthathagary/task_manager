const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

app.use("/api/v1/tasks",tasks)



const db = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI);
    const port = 6060;
    app.listen(port,()=>{
        console.log(`Listen on ${port}`);
    })
  } catch (error) {
    console.log(error);
  }
}

db();

