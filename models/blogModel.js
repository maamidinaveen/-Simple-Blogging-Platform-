const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    avatarUrl:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    topic:{
        type:String,
        require:true
    }
})


const Blogs = mongoose.model("Blogs",blogSchema);

module.exports = Blogs