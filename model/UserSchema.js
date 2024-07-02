import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        requried:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})

export const User = mongoose.model('User',userSchema);