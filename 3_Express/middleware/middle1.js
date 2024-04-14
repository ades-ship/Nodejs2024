function middle1(req,res,next){
    console.log('i am custom middleware');
    next();
}

module.exports=middle1;
