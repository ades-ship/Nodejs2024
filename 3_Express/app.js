// run the express nodemon server ->   npm run serve

const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.send('hello express');
})
app.get('/about',(req,res)=>{
    res.send('create the impact');
})

app.get('/contact',(req,res)=>{
    res.send('contact adesh@156gmail.com')
})
app.get('/courses/:id',(req,res)=>{
    // console.log(res); i can see the whole response from the backend
    res.send(req.params.id);  // this will render the response to the front end application
})

const port=process.env.PORT || 3000

app.listen(3000,()=>{
console.log(`port is running on ${port}`);
})