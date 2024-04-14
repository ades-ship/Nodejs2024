function middle2(req,res,next){
    console.log('i am  2nd custom middleware');
    next();
}

module.exports=middle2