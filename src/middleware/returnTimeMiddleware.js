export const returnTimeMiddleware=(req,res,next)=>{
    req.logTime = new Date()
    console.log(req.logTime)
    next()
}