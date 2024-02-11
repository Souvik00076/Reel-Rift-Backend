import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes'
import User from '../model/User.js'
import jwt from 'jsonwebtoken'

const createUser=async(req,res)=>{
    const user={...req.body}
    console.log(user.email)
    if(!user.name || !user.email || !user.password){
        //through a bad request error
        //redirect
    }
    User.exists({email:user.email})
    .then((err,result)=>{
        if(result){
            //throw a user already exist error
            //redirect 
        }
    })
    
    const data=await User.create(user)
    const token=jwt.sign({id:user.email},process.env.JWT_SECRET)    
    res.cookie('access_token',token,{
        httpOnly:true
    }).status(StatusCodes.CREATED).json({"message":"User Created"})
}


export {createUser}