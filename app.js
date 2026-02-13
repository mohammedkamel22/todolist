require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

async function DBconnnection(){
    try{
        const db = await mongoose.connect(process.env.PORT);
        console.log("db is working")
    }catch(error){
        console.log("db is not connected")
    }
}
DBconnnection()

app.get("/",(req, res)=>{
    res.send("hello world")
})
const task = require("./models/Task")

app.post("/api/tasks",async (req,res)=>{
    try{
        const result = await task.create(req.body);
        res.send(result)
        console.log("create task")
    }catch(error){
        console.log("error creating task")
    }
})

app.get("/api/tasks",async (req,res)=>{
    try{
        res.send(await task.find())
        console.log("read all tasks")
    }catch(error){
        console.log("error reading tasks")
    }
})
app.listen(process.env.PORT,()=>{
    console.log("server is running")

})