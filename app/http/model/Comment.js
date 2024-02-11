import mongoose from "mongoose";

const CommentSchema=mongoose.Schema({

    userId:{
        type:String,
        require:[true,'UserId cannot be empty']
    },
    videoId:{
        type:String,
        require:[true,'VideId cannot be empty']
    },
    description:{
        type:String,
    }
},{timestamps:true})

CommentSchema.methods.getUserId=function(){return this.userId}
CommentSchema.methods.getVideoId=function(){return this.videoId}
CommentSchema.methods.getDescription=function(){return this.description}

export default mongoose.model('Comment',CommentSchema)