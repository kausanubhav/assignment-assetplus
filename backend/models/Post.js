import mongoose from 'mongoose'

var postSchema = mongoose.Schema(
    {
        // @AssetPlus: Describe schema here
        title:{
            required:true,
            type:String
        },
        // image:{
        //     required:true,
        //     type:Buffer,

        // },
        description:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post", postSchema)
export default Post