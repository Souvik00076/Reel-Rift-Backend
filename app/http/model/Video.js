import mongoose from "mongoose";

const VideoSchema=new mongoose.Schema({

    userId:{
        type:String,
        required:[true,'UserId cannot be empty']
    },
    title:{
        type:String,
        required:[true,'Title cannot be empty']
    },
    description:{
        type:String
    },
    imageUrl:{
        type:String
    },
    videoUrl:{
        type:String,
        required:[true,'VideoUrl cannot be empty']
    },
    views:{
        type:Number,
        default:0
    },
    tags:{
        type:[String],
        default:[]
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    }
},{timestamps:true})


VideoSchema.methods.getUserId=function(){
    return this.userId
}
VideoSchema.methods.getTitle=function(){
    return this.title
}
VideoSchema.methods.getDescription=function(){
    return this.description
}
VideoSchema.methods.getImageUrl=function(){
    return this.imageUrl
}
VideoSchema.methods.getVideoUrl=function(){
    return this.videoUrl
}
VideoSchema.methods.getViews=function(){
    return this.views
}
VideoSchema.methods.getTags=function(){
    return this.tags
}
VideoSchema.methods.getLikes=function(){
    return this.likes
}
VideoSchema.methods.getDislikes=function(){
    return this.dislikes
}
export default mongoose.model('Video',VideoSchema)