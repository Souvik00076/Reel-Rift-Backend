import User from '../model/User.js'
import { StatusCodes } from 'http-status-codes'
const getUser=(req,res)=>{
    res.json({user:req.user})
}
const updateUser=async(req,res)=>{
    const paramId=req.params.id
    if(paramId !== req.user.id){
        //unauthorized access....
        return 
    }
    const updatedUser=await User.findByIdAndUpdate(
        paramId,
        {
            $set:req.body
        },{new:true}
    )
    res.status(StatusCodes.OK).json(updatedUser)
}
const deleteUser=async(req,res)=>{
    const paramId=req.params.id
    if(paramId !== req.user.id){
        //unauthorized access....
        return 
    }
    const deletedUser=await User.findByIdAndDelete(paramId)
    res.status(StatusCodes.OK).json({message:"Deleted Succefully",deletedUser})
}
const subscribeUser=async(req,res)=>{
    const paramId=req.params.id
    
    await User.findById(req.user.id,{
        $push:{ subscribedUsers:paramId},
    })
    console.log(paramId,"here")
    await User.findByIdAndUpdate(paramId,{
        $inc:{subscribers:1}
    })
    
    res.status(StatusCodes.OK).json({message:"Subscription Done"})
}
const unsubscribeUser=(req,res)=>{}
const likeUser=(req,res)=>{}
const dislikeUser=(req,res)=>{}

export {getUser,updateUser,deleteUser,subscribeUser,unsubscribeUser,likeUser,dislikeUser}