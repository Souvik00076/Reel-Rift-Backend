import Video from '../model/Video.js'
import { StatusCodes } from 'http-status-codes'
const createVideo=async(req,res)=>{
    const video=await Video.create({userId:req.user.id,...req.body})
    res.status(StatusCodes.CREATED).json({message:"Video Uploaded",data:video})
}
const updateVideo=async(req,res)=>{

    const video=await Video.findByIdAndUpdate(req.params.id)
    if(!video){
        //throw error accordingly
        return 
    }
    if(req.user.id===video.userId){
        const updatedVideo=await Video.findByIdAndUpdate(req.params.id,{
            $set:req.body
        })
        return res.status(StatusCodes.OK).json({message:"Video Updated",UpdatedVideo:updatedVideo})
    }
    //throw unauthenticated error here 
}
const deleteVideo=async(req,res)=>{

    const video=await Video.findById(req.params.id)
    if(!video){
        //throw error accordingly
        return 
    }

    if(video.userId===req.user.id){
        const deletedVideo=await Video.findByIdAndDelete(req.params.id)
        return res.status(StatusCodes.OK).json({message:"Video Deleted Successfully",DeletedVideo:deletedVideo})
    }
    //throw error accordingly
}
const getVideo=async(req,res)=>{
    const video=await Video.findById(req.params.id)
    if(!video) {
        //throw error accordingly
        return 
    }
    return res.status(StatusCodes.OK).json({message:"Get Successfulll",Video:video})
}
const viewVideo=(req,res)=>{}
const randomVideo=(req,res)=>{}
const trendingVideos=(req,res)=>{}
const subscribedChannels=(req,res)=>{}



export {createVideo,updateVideo,deleteVideo,getVideo,viewVideo,randomVideo,trendingVideos,subscribedChannels}