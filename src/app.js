const express = require('express')
const app = express();

app.get((req,res)=>{
    res.send("hello from server");
})
app.get("/",(req,res)=>{
    res.send("welcome to backend");
})
app.get("/aniketh",(req,res)=>{
    res.send("aniketh reddy");
})
app.get("/apple",(req,res)=>{
    res.send("apple is listen");
})
app.get("/reddy/api/get",(req,res)=>{
    res.send("getting aniketh...")
})


app.listen(3000,()=>{
    console.log("server listening...on the port 3000");
});