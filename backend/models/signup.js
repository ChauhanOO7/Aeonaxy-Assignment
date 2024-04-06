const mongoose=require("mongoose");

const user_schema=new mongoose.Schema({

    Name:{
        type:String
    },
    Username:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    },
    image_url:{
        type:String
    },
    location:{
        type:String
    },
    brings_you:{
        type:[String]
    }
});

const users=mongoose.model("users",user_schema);

module.exports=users;