const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.send('hello express');
})
app.get('/about',(req,res)=>{
    res.send('create the impact');
})

app.listen(3000,()=>{
console.log('port is running on 3000')
})