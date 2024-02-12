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
  
    res.status(StatusCodes.CREATED).json({message:"Account Created Successfully"})
}

const loginUser=async(req,res)=>{

    const {email,password}={...req.body}
    const user=await User.findOne({email})

    if(!user){
        return res.json({message:"Account Does Not Exist"})
    }
    const flag=user.match(password)
    if(!flag){
        return res.json({message:"Email/Password Invalid."})
    }
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
    
    res.cookie("access_token",token,{
        httpOnly:true
    }).json({message:"Welcome",user})
}

export {createUser,loginUser}