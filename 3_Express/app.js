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

const courses=[{
    id:1,name:"python"},
    {id:2,name:"dbms"},
    {id:3,name:"java"}
]


// search by id
// app.get('/courses/:id',(req,res)=>{
//     // console.log(req.params.id); //i can see the whole response from the backend
//     res.send(req.params.id)
//     // res.send(req.params.id);  // this will render the response to the front end application
// })

// by clicking on courses then we are rending into course 
// app.get('/courses/:coursename',(req,res)=>{
//     // console.log(req.params); i can see the whole response from the backend
//     // res.send(req.params.coursename)
//     // console.log(req.params.coursename)
//     let course=courses.find(course=>course.name===req.params.coursename)
//     if(!course) {
//         res.status(404).send('course doesnot exits');
//     }
//     res.send(course)
//     // res.send(req.params.id);  // this will render the response to the front end application
// })

// search by cousename or tap on course name
app.get('/courses/:coursename' , (req , res)=>{
    //console.log(req.params.coursename)
    let course = courses.find(course => course.name === req.params.coursename)
    

    if(!course) res.status(404).send('The course you are looking for does not exist')
    res.send(course)
})

const port=process.env.PORT || 3000

app.listen(3000,()=>{
console.log(`port is running on ${port}`);
})