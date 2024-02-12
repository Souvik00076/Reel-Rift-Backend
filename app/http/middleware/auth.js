import jwt from 'jsonwebtoken'
const authenticate=(req,res,next)=>{
    console.log("authenticate called")
    const token=req.cookies.access_token
    if(!token){
        //badrequest error
        return 
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            //not valid token
            return 
        }
        req.user=user
    })
    next() 
}
export {authenticate}