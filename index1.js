import express from 'express'     //importing express module from express
const app=express()   //instance of express
app.listen(8080,()=>{
    console.log("Server started")
})
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/home",(req,res)=>{
    res.send("This is home API")
})
app.get("/users",()=>{
res.send("This is users list")
})
