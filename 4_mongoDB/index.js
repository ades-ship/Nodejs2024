const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testDatabase').then(()=>{
    console.log('connection is successful')
}).catch(err=> console.error('not connected',err)) 



const courseSchema=new mongoose.Schema({
    name: String,
    creator:String,
    publishedDate:{type:Date,default:Date.now},
    isPublished:Boolean
})
const Course=mongoose.model( 'Course' ,courseSchema)
async function createCourse(){
    const course=new Course({
        name:'full stack',
        creator:'nitish',
        isPublished:true
    })
    const result=await course.save()
    console.log(result)
}
// createCourse();
// createCourse()


// get the data from database like how the real world application works. front end part take data from the backend like this
async function getCourse(){
    const  courses= await Course.find({creator:'nitish'}).select({name:1,isPublished:1}).sort( {publishedDate:-1 } )    
    console.log(courses)
}

getCourse();
